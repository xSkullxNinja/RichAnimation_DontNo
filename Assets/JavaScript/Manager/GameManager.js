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
	deathSound = new GameSound("deathSound");
	powerupSound = new GameSound("powerupSound");
	goalSound = new GameSound("reachGoalSound");

	stateManager = new StateManager();
	stateManager.init(evt);
    
    enemyManager = new EnemyManager();
}
