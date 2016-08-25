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
    gameplayLoadBasics(evt);
    collisionChecker.clearColliders();
    if(level == 1){
        gameplayLoadLevel1(evt);
    }
    else if(level == 2){
        gameplayLoadLevelVincent(evt);
    }
    else if(level == 3){
        
    }
    numCollected = 0;
}
function gameplayLoadBasics(evt){
	loadBackground("GamePlayBackground");
	scoreText = new ScoreText();
    pauseText = new createjs.Text("Paused" ,"36px Arial", "#ffffff");
    pauseText.x = 300;
    pauseText.y = 282;
}
function gameplayLoadLevel1(evt){
    score = 0;
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
	
	redGoal = new GoalSprite(GOAL_SPRITES);
	redGoal.init(725, 530);
	redGoal.play("red");
	
	blueGoal = new GoalSprite(GOAL_SPRITES);
	blueGoal.init(20, 20);
	blueGoal.play("blue");
    
    makeLevel1Walls();
    enemyManager.loadLevel1();
    loadTopUI(evt);
}
function gameplayLoadLevelVincent(evt){
    stars = [];

    var star = new StarSprite(STAR_SPRITES);
    star.init(165.0, 210.0);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);

    star = new StarSprite(STAR_SPRITES);
    star.init(600.0, 210.0);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);

    star = new StarSprite(STAR_SPRITES);
    star.init(380.0, 520.0);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);
	
	redGoal = new GoalSprite(GOAL_SPRITES);
	redGoal.init(725, 530);
	redGoal.play("red");
	
	blueGoal = new GoalSprite(GOAL_SPRITES);
	blueGoal.init(20, 20);
	blueGoal.play("blue");
    
    makeLevel2Walls();
    enemyManager.loadLevelVincent();
    loadTopUI(evt);
}
function loadTopUI(evt){
    var muteButton = getButton(MUTE_BUTTON);
    scoreText.init(365, 100, stage);
    muteButton.init(evt, 33, 534);
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
function makeLevel1Walls(){
    //Outside walls
    addWall(0, 0, 1, 30);    
    addWall(780, 0, 1, 30);
    addWall(0, 0, 40, 1);
    addWall(0, 580, 40, 1);
    
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

function makeLevel2Walls(){
    //Outside walls
    addWall(0, 0, 1, 30);    
    addWall(780, 0, 1, 30);
    addWall(0, 0, 40, 1);
    addWall(0, 580, 40, 1);
    
    //boundary walls
    addWall(100, 080, 15, 1);
    addWall(420, 080, 14, 1);
    
    addWall(100, 480, 15, 1);
    addWall(420, 480, 14, 1);
    
    addWall(100, 160, 1, 8);
    addWall(680, 160, 1, 8);
    
    addWall(100, 380, 1, 5);
    addWall(680, 380, 1, 5);
    
    //Inner walls
    addWall(120, 300, 8, 1);
    addWall(520, 300, 8, 1);
    
    addWall(260, 160, 1, 7);
    addWall(520, 160, 1, 7);
    
    addWall(260, 320, 1, 5);
    addWall(520, 320, 1, 5);
    
    //Mid wall
    addWall(390, 80, 2, 21);
}