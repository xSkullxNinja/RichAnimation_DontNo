function enterMainMenuScene(evt) {
	loadBackground("MainMenuBackground");
	var playButton = getButton(PLAY_BUTTON);
	var instructionButton = getButton(INSTRUCTION_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);
    var creditButton = getButton(CREDIT_BUTTON);
	
	playButton.init(evt, 206, 400);
	instructionButton.init(evt, 500, 400);
	muteButton.init(evt, 33, 534);
    creditButton.init(evt, 500, 500);
}
