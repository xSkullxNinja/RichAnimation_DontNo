var stateManager;

function initializeGame(evt) {
	mouseInit();
	buttonInit();
	spriteInit();
	timerInit();
	
	initializeStage(evt);
	
	var newMusic = new GameMusic();
	newMusic.init("backgroundMusicMemories", 0.1);
	newMusic.play();

	stateManager = new StateManager();
	stateManager.init(evt);
}
