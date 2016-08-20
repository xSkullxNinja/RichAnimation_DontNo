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
	player1.init(evt, 0, 0);
	player2 = new Player("Blue");
	player2.init(evt, 100, 100);
	assignKeyPressFunction(keyCodes.LETTER_A, movePlayer1Left);
	assignKeyPressFunction(keyCodes.LETTER_S, movePlayer1Down);
	assignKeyPressFunction(keyCodes.LETTER_D, movePlayer1Right);
	assignKeyPressFunction(keyCodes.LETTER_W, movePlayer1Up);
	assignKeyPressFunction(keyCodes.KEYCODE_LEFT, movePlayer2Left);
	assignKeyPressFunction(keyCodes.KEYCODE_DOWN, movePlayer2Down);
	assignKeyPressFunction(keyCodes.KEYCODE_RIGHT, movePlayer2Right);
	assignKeyPressFunction(keyCodes.KEYCODE_UP, movePlayer2Up);
	xPos = yPos = 400;
    enemyManager.loadLevel1();
}

function runGamePlayState(evt) {  
    if(!paused){
	   runGamePlayScene(evt);
        enemyManager.update();
//Eduardo did it.
//        if (collisionChecker.isCollidingWithEnemy(player1.shape, 0)) {
//            console.log("THis touched something");
//        }
        // collisionChecker.pushBackIfColliding(player1.shape);
        // collisionChecker.pushBackIfColliding(player2.shape);
		// if(collisionChecker.isCollidingWithEnemy(player1.shape, 1.0)) {
		// 	console.log("Colliding");
		// }
    }
}
function exitGamePlayState(evt) {
	stage.removeAllChildren();
	clearAllKeyCodes();
}
function movePlayer1Right() {
	player1.moveRight();
}
function movePlayer1Left() {
	player1.moveLeft();
}
function movePlayer1Down() {
	player1.moveDown();
}
function movePlayer1Up() {
	player1.moveUp();
}
function movePlayer2Right() {
	player2.moveRight();
}
function movePlayer2Left() {
	player2.moveLeft();
}
function movePlayer2Down() {
	player2.moveDown();
}
function movePlayer2Up() {
	player2.moveUp();
}
function increaseScore(collectible){
    //Add removing the collectible from the collision array as well
    stage.removeChild(collectible);
    numCollected++;
    score += (500 * numCollected);
}
