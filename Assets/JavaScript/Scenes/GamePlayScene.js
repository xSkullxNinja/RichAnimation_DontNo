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
	mouseText.init(315, 315, stage);
	scoreText.init(365, 350, stage);
	
    makeWalls();

    var star = new StarSprite(STAR_SPRITES);
    star.init(37.5, 517.5);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;

    star = new StarSprite(STAR_SPRITES);
    star.init(712.5, 32.5);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;

    star = new StarSprite(STAR_SPRITES);
    star.init(375, 275);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;

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
function addWall(xPos, yPos, scaleX, scaleY) {
    var wall = new WallSprite(WALL_SPRITES);
    wall.init(xPos, yPos);
    wall.sprite.scaleX = scaleX;
    wall.sprite.scaleY = scaleY;
    collisionChecker.addCollider(wall.sprite);
}
function makeWalls(){
    //Verticle walls
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