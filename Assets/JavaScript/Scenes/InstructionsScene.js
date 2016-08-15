function enterInstructionsScene(evt) {
	loadBackground("InstructionBackground");
	var menuButton = getButton(MENU_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);

	menuButton.init(evt, 353, 400);
	muteButton.init(evt, 33, 534);
}
