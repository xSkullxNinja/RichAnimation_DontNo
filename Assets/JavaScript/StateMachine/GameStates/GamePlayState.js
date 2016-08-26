var numLevels = 3;
var easterEgg = false;
var frame = 0;
var player1XGreater;
var player1YGreater;
var deathSound, powerupSound, goalSound; 
var redCollided, blueCollided;

function GamePlayState() {
	State.call(this);
}
GamePlayState.prototype = Object.create(State.prototype);
GamePlayState.prototype.constuctor = GamePlayState;

GamePlayState.prototype.enter = enterGamePlayState;
GamePlayState.prototype.run = runGamePlayState;
GamePlayState.prototype.exit = exitGamePlayState;

var player1, player2;
function enterGamePlayState(evt) {
    frame = 0;
    easterEgg = false;
    redCollided = false;
    blueCollided = false;
    enterGamePlayScene(evt);
	resetGameTimer();
    addPlayerAndKeys(evt);
}

function addPlayerAndKeys(evt){
	assignKeyPressFunction(keyCodes.LETTER_A, movePlayer1Left);
	assignKeyPressFunction(keyCodes.LETTER_S, movePlayer1Down);
	assignKeyPressFunction(keyCodes.LETTER_D, movePlayer1Right);
	assignKeyPressFunction(keyCodes.LETTER_W, movePlayer1Up);
	assignKeyPressFunction(keyCodes.KEYCODE_LEFT, movePlayer2Left);
	assignKeyPressFunction(keyCodes.KEYCODE_DOWN, movePlayer2Down);
	assignKeyPressFunction(keyCodes.KEYCODE_RIGHT, movePlayer2Right);
	assignKeyPressFunction(keyCodes.KEYCODE_UP, movePlayer2Up);
    assignKeyDownFunction(keyCodes.LETTER_J, toggleJamie);
    assignKeyDownFunction(keyCodes.LETTER_E, startEasterEgg);
    assignKeyUpFunction(keyCodes.ESCAPE, pause);
    
    assignKeyUpFunction(keyCodes.LETTER_A, stopPlayer1Left);
	assignKeyUpFunction(keyCodes.LETTER_S, stopPlayer1Down);
	assignKeyUpFunction(keyCodes.LETTER_D, stopPlayer1Right);
	assignKeyUpFunction(keyCodes.LETTER_W, stopPlayer1Up);
	assignKeyUpFunction(keyCodes.KEYCODE_LEFT, stopPlayer2Left);
	assignKeyUpFunction(keyCodes.KEYCODE_DOWN, stopPlayer2Down);
	assignKeyUpFunction(keyCodes.KEYCODE_RIGHT, stopPlayer2Right);
	assignKeyUpFunction(keyCodes.KEYCODE_UP, stopPlayer2Up);
	xPos = yPos = 400;
}

function runGamePlayState(evt) {  

	runGamePlayScene(evt);
	collisionChecker.pushBackIfColliding(player1.shape, 1);
	collisionChecker.pushBackIfColliding(player2.shape, 2);
    checkStarCollisions();
    enemyManager.update();
    resetCancels();
    scoreText.change(score);
    if(easterEgg){
    	runEasterEgg();
    }
    if(collisionChecker.isCollidingWithEnemy(player1.shape, 0.5)){
		console.log(deathSound);
        deathSound.play();
		loseGame(evt);
    }
    if(collisionChecker.isCollidingWithEnemy(player2.shape, 0.5)){
		console.log(deathSound);
		deathSound.play();
        loseGame(evt);
    }
    if(level < numLevels){
    	if(levelFinished()){
        	WonLevel(evt);
        }
    }
    else if(levelFinished()) {
      	WonFinalLevel(evt);
    }
}

function startEasterEgg(){
    if(!easterEgg && ndgmr.checkPixelCollision(player1.shape, player2.shape, 0)){
        easterEgg = true;
        player1.shape.gotoAndPlay("walk");
        player2.shape.gotoAndPlay("walk");
        player1XGreater = player1.shape.x > player2.shape.x;
        player1YGreater = player1.shape.y > player2.shape.y;
        frame = 0;
    }
}

function runEasterEgg(){
    if(frame < 5){
        if(player1XGreater){
            player1.shape.x -= 4;
            player2.shape.x += 4;
        }
        else{
            player1.shape.x += 4;
            player2.shape.x -= 4;
        }
        frame++;
    }
    else if(frame < 14){
        if(player1XGreater){
            player1.shape.x += 4;
            player2.shape.x -= 4;
        }
        else{
            player1.shape.x -= 4;
            player2.shape.x += 4;
        }
        frame++;
    }
    else if(frame < 18){
        if(player1XGreater){
            player1.shape.x -= 4;
            player2.shape.x += 4;
        }
        else{
            player1.shape.x += 4;
            player2.shape.x -= 4;
        }
        frame++;
    }
    else if(frame < 23){
        if(player1YGreater){
            player1.shape.y -= 4;
            player2.shape.y += 4;
        }
        else{
            player1.shape.y += 4;
            player2.shape.y -= 4;
        }
        frame++;
    }
    else if(frame < 32){
        if(player1YGreater){
            player1.shape.y += 4;
            player2.shape.y -= 4;
        }
        else{
            player1.shape.y -= 4;
            player2.shape.y += 4;
        }
        frame++;
    }
    else if(frame < 36){
        if(player1YGreater){
            player1.shape.y -= 4;
            player2.shape.y += 4;
        }
        else{
            player1.shape.y += 4;
            player2.shape.y -= 4;
        }
        frame++;
    }
    else{
        easterEgg = false;
        player1.shape.gotoAndPlay("stand");
        player2.shape.gotoAndPlay("stand");
    }
}
function loseGame(evt){
    collisionChecker.clearColliders();
    collisionChecker.clearEnemyColliders();
    stopEnemyMovement();
    stateManager.change(evt, new GameOverState());
}
//TODO: remove score increase because collectables should do it for us. Although increasing score for winning could be good too.
function WonLevel(evt){
    score += 5000;
    collisionChecker.clearColliders();
    collisionChecker.clearEnemyColliders();
    stopEnemyMovement();
    level++;
    stateManager.change(evt, new LoadingLevelState());
//    stateManager.change(evt, new WinState());
}
function WonFinalLevel(evt){
    score += 5000;
    collisionChecker.clearColliders();
    collisionChecker.clearEnemyColliders();
    stopEnemyMovement();
    level = 1;
    stateManager.change(evt, new WinState());
}
function levelFinished(){
    return collidingGoals();
}
function collidingGoals() {
	var redcollision = ndgmr.checkRectCollision(player1.shape, redGoal.sprite);
	var blueCollision = ndgmr.checkRectCollision(player2.shape, blueGoal.sprite);
	var redColliding = redcollision != null;
	var blueColliding = blueCollision != null;
	if (redColliding) {
		redGoal.play("reached", !redCollided);
        redCollided = true;
	}
	else {
		redGoal.play("red", false);
        redCollided = false;
	}
	if (blueColliding) {
		blueGoal.play("reached", !blueCollided);
        blueCollided = true;
	}
	else {
		blueGoal.play("blue");
        blueCollided = false;
	}
	return blueColliding && redColliding
}

function loadLevel2(){
    stage.removeAllChildren();
    gameplayLoadBasics();
    gameplayLoadLevelVincent();
    addPlayerAndKeys();
    enemyManager.loadLevelVincent();
}

function exitGamePlayState(evt) {
	stage.removeAllChildren();
	clearAllKeyCodes();
}
function movePlayer1Right() {
    if(!easterEgg){
        movingRightPlayer1 = true;
	    player1.moveRight();
    }
}
function movePlayer1Left() {
    if(!easterEgg){
        movingLeftPlayer1 = true;
	    player1.moveLeft();
    }
}
function movePlayer1Down() {
    if(!easterEgg){
        movingDownPlayer1 = true;
	    player1.moveDown();
    }
}
function movePlayer1Up() {
    if(!easterEgg){
        movingUpPlayer1 = true;
	    player1.moveUp();
    }
}
function movePlayer2Right() {
    if(!easterEgg){
        movingRightPlayer2 = true;
	    player2.moveRight();
    }
}
function movePlayer2Left() {
    if(!easterEgg){
        movingLeftPlayer2 = true
	    player2.moveLeft();
    }
}
function movePlayer2Down() {
    if(!easterEgg){
        movingDownPlayer2 = true;
	    player2.moveDown();
    }
}
function movePlayer2Up() {
    if(!easterEgg){
        movingUpPlayer2 = true;
	    player2.moveUp();
    }
}
function stopPlayer1Right() {
	movingRightPlayer1 = false;
	player1.stopPlayer();
}
function stopPlayer1Left() {
	movingLeftPlayer1 = false;
	player1.stopPlayer();
}
function stopPlayer1Down() {
	movingDownPlayer1 = false;
	player1.stopPlayer();
}
function stopPlayer1Up() {
	movingUpPlayer1 = false;
	player1.stopPlayer();
}
function stopPlayer2Right() {
	movingRightPlayer2 = false;
	player2.stopPlayer();
}
function stopPlayer2Left() {
	movingLeftPlayer2 = false;
	player2.stopPlayer();
}
function stopPlayer2Down() {
	movingDownPlayer2 = false;
	player2.stopPlayer();
}
function stopPlayer2Up() {
	movingUpPlayer2 = false;
	player2.stopPlayer();
}
function stopEnemyMovement(){
    stopPlayer2Left();
    stopPlayer2Right();
    stopPlayer2Up();
	stopPlayer2Down();
    
    stopPlayer1Up();
    stopPlayer1Down();
    stopPlayer1Left();
    stopPlayer1Right();
}
function toggleJamie(){
    jamie = !jamie;
}

function resetCancels(){
    cancelPlayer1Horizontal = false;
    cancelPlayer1Vertical = false;
    cancelPlayer2Horizontal = false;
    cancelPlayer2Vertical = false;
}

//TO DO: Move to CollisionChecker
function checkStarCollisions(){
    var toRemove = [];
    for(var i = 0; i < stars.length; i++){
        var redCollision = ndgmr.checkPixelCollision(player1.shape, stars[i].sprite, 0);
        var blueCollision = ndgmr.checkPixelCollision(player2.shape, stars[i].sprite, 0);
        if(redCollision || blueCollision){
            toRemove.push(i);
			powerupSound.play();
            increaseScore(stars[i].sprite);
        }
    }
    for(var i = 0; i < toRemove.length; i++){
        stars.splice(toRemove[i] - i, 1);
    }
}

function increaseScore(collectible){
    //Add removing the collectible from the collision array as well
    stage.removeChild(collectible);
    showStar(numCollected);
    numCollected++;
    score += (500 * numCollected);
}
