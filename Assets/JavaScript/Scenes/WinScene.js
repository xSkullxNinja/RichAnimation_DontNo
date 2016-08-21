function enterWinScene(evt) {
	loadBackground("WinBackground");
	var playAgainButton = getButton(PLAY_AGAIN_BUTTON);
	var menuButton = getButton(MENU_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);
	var scoreText = new ScoreText();
	
	playAgainButton.init(evt, 206, 400);
	menuButton.init(evt, 500, 400);
	muteButton.init(evt, 33, 534);
	scoreText.init(365, 200, stage);

	scoreText.change(score);
}
