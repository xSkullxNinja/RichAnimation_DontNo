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
	player1 = new Player();
	player1.init(evt, 0, 0);
	player2 = new Player();
	player2.init(evt, 100, 100);
	assignKeyPressFunction(keyCodes.LETTER_A, movePlayer1Left);
	assignKeyPressFunction(keyCodes.LETTER_S, movePlayer1Down);
	assignKeyPressFunction(keyCodes.LETTER_D, movePlayer1Right);
	assignKeyPressFunction(keyCodes.LETTER_W, movePlayer1Up);
	assignKeyPressFunction(keyCodes.KEYCODE_LEFT, movePlayer2Left);
	assignKeyPressFunction(keyCodes.KEYCODE_DOWN, movePlayer2Down);
	assignKeyPressFunction(keyCodes.KEYCODE_RIGHT, movePlayer2Right);
	assignKeyPressFunction(keyCodes.KEYCODE_UP, movePlayer2Up);
}
function runGamePlayState(evt) {
	runGamePlayScene(evt);
}
function exitGamePlayState(evt) {
	stage.removeAllChildren();
	highScore = gameTimer;
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
