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
var cancelPlayer1Vertical = false;
var cancelPlayer1Horizontal = false;
var cancelPlayer2Vertical = false;
var cancelPlayer2Horizontal = false;
var stars = [];

function enterGamePlayScene(evt) {
	loadBackground("GamePlayBackground");
	var muteButton = getButton(MUTE_BUTTON);
	scoreText = new ScoreText();
    pauseText = new createjs.Text("Paused" ,"36px Arial", "#ffffff");
    pauseText.x = 300;
    pauseText.y = 282;
    
	collisionChecker.clearColliders();
    makeWalls();
    
    stars = [];

    var star = new StarSprite(STAR_SPRITES);
    star.init(37.5, 517.5);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);

    star = new StarSprite(STAR_SPRITES);
    star.init(712.5, 32.5);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);

    star = new StarSprite(STAR_SPRITES);
    star.init(375, 275);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);
    
    scoreText.init(365, 100, stage);
    muteButton.init(evt, 33, 534);	

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
}
function addWall(xPos, yPos, scaleX, scaleY) {
    var wall = new WallSprite(WALL_SPRITES);
    wall.init(xPos, yPos);
    wall.sprite.scaleX = scaleX;
    wall.sprite.scaleY = scaleY;
    collisionChecker.addCollider(wall.sprite);
}
function makeWalls(){
    var wall = new createjs.Bitmap(queue.getResult("Wall"));
	var sideWall = new createjs.Bitmap(queue.getResult("SideWall"));
    
    //Vertical walls
    addWall(0, 0, 1, 30);    
    addWall(780, 0, 1, 30);
    
    //inner walls
    addWall(95, 175, 2, 10);   
    addWall(665, 225, 2, 10);

    //tall walls
    addWall(210, 20, 3, 20);
    addWall(530, 180, 3, 20);

    //Horizontal walls
    addWall(0, 0, 40, 1);
    addWall(0, 580, 40, 1);

    //Mini walls
    addWall(20, 465, 5, 2);
    addWall(680, 95, 5, 2);
    
    //Center walls
    addWall(340, 145, 6, 3);
    addWall(340, 395, 6, 3);
}