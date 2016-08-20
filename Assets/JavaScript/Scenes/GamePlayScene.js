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
	
    makeWalls();
	
	//var newWall = new createjs.Bitmap(queue.getResult("Wall"));
	//newWall.x = 490;
	//newWall.y = 300;
	//newWall.rotation = 90;
	//stage.addChild(newWall);
	
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
	if(gameTimer >= 100) {
		stateManager.change(evt, new GameOverState());
	}
	//collisionChecker.pushBackIfColliding(walker.sprite);
	mouseText.change(getMousePosition());
	scoreText.change(score);
}
function makeWalls(){
    var wall = new createjs.Bitmap(queue.getResult("Wall"));
	var sideWall = new createjs.Bitmap(queue.getResult("SideWall"));
    
    //Verticle walls
	wall.x = 0;
	wall.y = 0;
    wall.scaleY = 30;
    addToStageAndCollider(wall.clone());
    
    wall.x = 780;
    addToStageAndCollider(wall.clone());
    
    //inner walls
    wall.x = 90;
    wall.y = 165;
    wall.scaleX = 2;
    wall.scaleY = 10;
    addToStageAndCollider(wall.clone());
    
    wall.x = 675;
    wall.y = 250;
    addToStageAndCollider(wall.clone());
    
    //tall walls
    wall.x = 200;
    wall.y = 30;
    wall.scaleX = 3;
    wall.scaleY = 20;
    addToStageAndCollider(wall.clone());
    
    wall.x = 550;
    wall.y = 200;
    addToStageAndCollider(wall.clone());
    
    //Horizontal walls
    wall.x = 0;
    wall.y = 0;
    wall.scaleY = 2;
    wall.scaleX = 40;
    addToStageAndCollider(wall.clone());
    
    wall.y = 560;
    addToStageAndCollider(wall.clone());

    //Mini walls
    wall.x = 20;
    wall.y = 450;
    wall.scaleX = 5;
    addToStageAndCollider(wall.clone());
    
    wall.x = 680;
    wall.y = 120;
    addToStageAndCollider(wall.clone());
    
    //Center walls
    wall.x = 350;
    wall.y = 150;
    wall.scaleX = 6;
    wall.scaleY = 3;
    addToStageAndCollider(wall.clone());
    
    wall.y = 400;
    addToStageAndCollider(wall.clone());
}
function addToStageAndCollider(wall){
    stage.addChild(wall);
    collisionChecker.addCollider(wall);
}