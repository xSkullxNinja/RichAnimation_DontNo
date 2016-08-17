var walker;
var mouseText, scoreText;
function enterGamePlayScene(evt) {
	loadBackground("GamePlayBackground");
	var menuButton = getButton(MENU_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);
	mouseText = new MouseText();
	scoreText = new ScoreText();

	menuButton.init(evt, 673, 534);
	muteButton.init(evt, 33, 534);
	mouseText.init(315, 165, stage);
	scoreText.init(365, 200, stage);

	highScore = 0;
}
function runGamePlayScene(evt) {
	highScore = gameTimer;
	if(gameTimer >= 10) {
		stateManager.change(evt, new GameOverState());
	}
	mouseText.change(getMousePosition());
	scoreText.change(highScore);
}
