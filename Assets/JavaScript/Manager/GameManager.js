var stateManager;
var enemyManager;

function initializeGame(evt) {
	mouseInit();
	buttonInit();
	spriteInit();
	timerInit();
	
	initializeStage(evt);
	
	var newMusic = new GameMusic("backgroundMusicMemories");
	newMusic.init(0.1);
	newMusic.play();

	stateManager = new StateManager();
	stateManager.init(evt);
    
    enemyManager = new EnemyManager();
}
