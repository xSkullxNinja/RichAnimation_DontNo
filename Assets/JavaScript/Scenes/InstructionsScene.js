function enterInstructionsScene(evt) {
	loadBackground("InstructionBackground");
    var line1 = new createjs.Text("-WASD to move red player, arrow keys to move blue player", "22px Arial", "#000000");
    var line2 = new createjs.Text("-Red enemies move with red player, blue enemies move with blue player", "22px Arial", "#000000");
    var line3 = new createjs.Text("Purple enemies move with either player", "22px Arial", "#000000");
    var line4 = new createjs.Text("-Collect stars to increase your score", "22px Arial", "#000000");
    var line5 = new createjs.Text("-Get red player to blue player's initial position and vice versa to win", "22px Arial", "#000000");
    
    var x = 30;
    line1.x = x;
    line1.y = 200;
    
    line2.x = x;
    line2.y = 230;
    
    line3.x = x;
    line3.y = 260;
    
    line4.x = x;
    line4.y = 290;
    
    line5.x = x;
    line5.y = 320;
    
    stage.addChild(line1);
    stage.addChild(line2);
    stage.addChild(line3);
    stage.addChild(line4);
    stage.addChild(line5);
    
	var menuButton = getButton(MENU_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);

	menuButton.init(evt, 353, 400);
	muteButton.init(evt, 33, 534);
}
