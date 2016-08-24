function enterInstructionsScene(evt) {
	loadBackground("MainMenuBackground");
	loadBackground("InstructionBackground", 80, 60);
    var instructions = new createjs.Text("INSTRUCTIONS", "48px Arial", "#000000");
    var line1 = new createjs.Text("-WASD to move red player", "22px Arial", "#000000");
    var line2 = new createjs.Text("-Arrow keys to move blue player", "22px Arial", "#000000");
    var line3 = new createjs.Text("-Red enemies move with red player", "22px Arial", "#000000");
    var line4 = new createjs.Text(" Blue enemies move with blue player", "22px Arial", "#000000");
    var line5 = new createjs.Text(" Purple enemies move with either player", "22px Arial", "#000000");
    var line6 = new createjs.Text("-Collect stars to increase your score", "22px Arial", "#000000");
    var line7 = new createjs.Text("-Get red player to blue player's initial position", "22px Arial", "#000000");
    var line8 = new createjs.Text("-Get blue player to red player's initial position", "22px Arial", "#000000");
    
    instructions.x = 220;
    instructions.y = 120;

    var x = 150;
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

    line6.x = x;
    line6.y = 350;
    
    line7.x = x;
    line7.y = 380;

    line8.x = x;
    line8.y = 410;

    stage.addChild(instructions);
    stage.addChild(line1);
    stage.addChild(line2);
    stage.addChild(line3);
    stage.addChild(line4);
    stage.addChild(line5);
    stage.addChild(line6);
    stage.addChild(line7);
    stage.addChild(line8);
    
	var menuButton = getButton(MENU_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);

	menuButton.init(evt, 353, 450);
	muteButton.init(evt, 33, 534);
}
