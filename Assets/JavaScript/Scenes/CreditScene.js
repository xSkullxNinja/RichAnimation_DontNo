function enterCreditScene(evt) {
	loadBackground("CreditBackground");
	var menuButton = getButton(MENU_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);
	
	menuButton.init(evt, 125, 500);
	muteButton.init(evt, 33, 534);
}
