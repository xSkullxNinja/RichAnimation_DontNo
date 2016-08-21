var mouseText, scoreText, pauseText;
var paused = false;
var movingLeftPlayer1 = false; 
var movingRightPlayer1 = false;
var movingUpPlayer1 = false; 
var movingDownPlayer1 = false;
var movingLeftPlayer2 = false; 
var movingRightPlayer2 = false;
var movingUpPlayer2 = false; 
var movingDownPlayer2 = false;

function enterGamePlayScene(evt) {
	loadBackground("GamePlayBackground");
	var muteButton = getButton(MUTE_BUTTON);
	scoreText = new ScoreText();
    pauseText = new createjs.Text("Paused" ,"36px Arial", "#ffffff");
    pauseText.x = 300;
    pauseText.y = 282;
    
	muteButton.init(evt, 33, 534);
	scoreText.init(365, 200, stage);
	
	collisionChecker.clearColliders();
    makeWalls();
	
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
    //TODO: End the game properly
	if(gameTimer >= 100) {
		stateManager.change(evt, new GameOverState());
	}
	scoreText.change(score);
}
function makeWalls(){
    var wall = new createjs.Bitmap(queue.getResult("Wall"));
	var sideWall = new createjs.Bitmap(queue.getResult("SideWall"));
    
    //Vertical walls
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
    
    wall.x = 680;
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