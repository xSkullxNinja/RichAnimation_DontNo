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
	enterGamePlayScene(evt);
	resetGameTimer();
	player1 = new Player("Red");
	player1.init(evt, 20, 40);
	player2 = new Player("Blue");
	player2.init(evt, 750, 550);
	assignKeyPressFunction(keyCodes.LETTER_A, movePlayer1Left);
	assignKeyPressFunction(keyCodes.LETTER_S, movePlayer1Down);
	assignKeyPressFunction(keyCodes.LETTER_D, movePlayer1Right);
	assignKeyPressFunction(keyCodes.LETTER_W, movePlayer1Up);
	assignKeyPressFunction(keyCodes.KEYCODE_LEFT, movePlayer2Left);
	assignKeyPressFunction(keyCodes.KEYCODE_DOWN, movePlayer2Down);
	assignKeyPressFunction(keyCodes.KEYCODE_RIGHT, movePlayer2Right);
	assignKeyPressFunction(keyCodes.KEYCODE_UP, movePlayer2Up);
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
    enemyManager.loadLevel1();
}

function runGamePlayState(evt) {  
    if(!paused){
		runGamePlayScene(evt);
		enemyManager.update();
		collisionChecker.pushBackIfColliding(player1.shape);
		collisionChecker.pushBackIfColliding(player2.shape);
        if(collisionChecker.isCollidingWithEnemy(player1.shape, 0.5)){
            loseGame(evt);
        }
        if(collisionChecker.isCollidingWithEnemy(player2.shape, 0.5)){
            loseGame(evt);
        }
        
        if(level1Finished()){
            WonLevel1(evt);
        }
    }
}
function loseGame(evt){
    collisionChecker.clearColliders();
    collisionChecker.clearEnemyColliders();
    stopEnemyMovement();
    stateManager.change(evt, new GameOverState());
}
//TODO: remove score increase because collectables should do it for us. Although increasing score for winning could be good too.
function WonLevel1(evt){
    score += 1337;
    collisionChecker.clearColliders();
    collisionChecker.clearEnemyColliders();
    stopEnemyMovement();
    stateManager.change(evt, new GameOverState());
}
function level1Finished(){
    if(player1.shape.x > 690 && player1.shape.y> 490
      && player2.shape.x < 100 && player2.shape.y < 125){
        return true;
    }
    return false;
}
function exitGamePlayState(evt) {
	stage.removeAllChildren();
	clearAllKeyCodes();
}
function movePlayer1Right() {
    movingRightPlayer1 = true;
	player1.moveRight();
}
function movePlayer1Left() {
    movingLeftPlayer1 = true;
	player1.moveLeft();
}
function movePlayer1Down() {
    movingDownPlayer1 = true;
	player1.moveDown();
}
function movePlayer1Up() {
    movingUpPlayer1 = true;
	player1.moveUp();
}
function movePlayer2Right() {
    movingRightPlayer2 = true;
	player2.moveRight();
}
function movePlayer2Left() {
    movingLeftPlayer2 = true
	player2.moveLeft();
}
function movePlayer2Down() {
    movingDownPlayer2 = true;
	player2.moveDown();
}
function movePlayer2Up() {
    movingUpPlayer2 = true;
	player2.moveUp();
}
function stopPlayer1Right() {
	movingRightPlayer1 = false;
}
function stopPlayer1Left() {
	movingLeftPlayer1 = false;
}
function stopPlayer1Down() {
	movingDownPlayer1 = false;
}
function stopPlayer1Up() {
	movingUpPlayer1 = false;
}
function stopPlayer2Right() {
	movingRightPlayer2 = false;
}
function stopPlayer2Left() {
	movingLeftPlayer2 = false;
}
function stopPlayer2Down() {
	movingDownPlayer2 = false;
}
function stopPlayer2Up() {
	movingUpPlayer2 = false;
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
function increaseScore(collectible){
    //Add removing the collectible from the collision array as well
    stage.removeChild(collectible);
    numCollected++;
    score += (500 * numCollected);
}
