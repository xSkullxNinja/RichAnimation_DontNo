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
    deathSound.init(0.1);
	powerupSound = new GameSound("powerupSound");
    powerupSound.init(0.1)
	goalSound = new GameSound("reachGoalSound");
    goalSound.init(0.1);

	stateManager = new StateManager();
	stateManager.init(evt);
    
    enemyManager = new EnemyManager();
}
