var mouseText, scoreText, pauseText;
var paused = false;

function enterGamePlayScene(evt) {
	loadBackground("GamePlayBackground");
	var menuButton = getButton(MENU_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);
	mouseText = new MouseText();
	scoreText = new ScoreText();
    pauseText = new createjs.Text("Paused" ,"36px Arial", "#ffffff");
    pauseText.x = 300;
    pauseText.y = 282;
    
	menuButton.init(evt, 673, 534);
	muteButton.init(evt, 33, 534);
	mouseText.init(315, 165, stage);
	scoreText.init(365, 200, stage);
	
	//var wall = new createjs.Bitmap(queue.getResult("Wall"));
	//wall.x = 535;
	//wall.y = 300;
	//stage.addChild(wall);
	
	//var newWall = new createjs.Bitmap(queue.getResult("Wall"));
	//newWall.x = 490;
	//newWall.y = 300;
	//newWall.rotation = 90;
	//stage.addChild(newWall);
	
	//collisionChecker.addCollider(wall);
	//collisionChecker.addCollider(newWall);
	
	score = 0;
    numCollected = 0;
}
function pause(){
    if(paused){
        paused = false;
        stage.removeChild(pauseText);
    }
    else{
        paused = true;
        stage.addChild(pauseText)
    }
}
function runGamePlayScene(evt) {
    runGameTimer(evt);
	if(gameTimer >= 10) {
		stateManager.change(evt, new GameOverState());
	}
	//collisionChecker.pushBackIfColliding(walker.sprite);
	mouseText.change(getMousePosition());
	scoreText.change(score);
}