function GamePlayState() {
	State.call(this);
}
GamePlayState.prototype = Object.create(State.prototype);
GamePlayState.prototype.constuctor = GamePlayState;

GamePlayState.prototype.enter = enterGamePlayState;
GamePlayState.prototype.run = runGamePlayState;
GamePlayState.prototype.exit = exitGamePlayState;

function enterGamePlayState(evt) {
	enterGamePlayScene(evt);
	resetGameTimer();
	assignKeyDownFunction(keyCodes.KEYCODE_RIGHT, moveRight);
	assignKeyDownFunction(keyCodes.LETTER_D, moveRight);
	assignKeyDownFunction(keyCodes.KEYCODE_LEFT, moveLeft);
	assignKeyDownFunction(keyCodes.LETTER_A, moveLeft);
	assignKeyUpFunction(keyCodes.KEYCODE_RIGHT, stopRight);
	assignKeyUpFunction(keyCodes.LETTER_D, stopRight);
	assignKeyUpFunction(keyCodes.KEYCODE_LEFT, stopLeft);
	assignKeyUpFunction(keyCodes.LETTER_A, stopLeft);
    assignKeyUpFunction(keyCodes.ESCAPE, pause);
	xPos = yPos = 400;
    enemyManager.loadLevel1();
}
function runGamePlayState(evt) {
    if(!paused){
	    runGamePlayScene(evt);
        enemyManager.update();
    }
}
function exitGamePlayState(evt) {
	stage.removeAllChildren();
	highScore = gameTimer;
	clearAllKeyCodes();
}
