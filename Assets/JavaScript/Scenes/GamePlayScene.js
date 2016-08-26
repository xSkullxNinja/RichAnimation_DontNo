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
var scoreStars = [];
var starCount = 0;

function enterGamePlayScene(evt) {
    gameplayLoadBasics(evt);
    collisionChecker.clearColliders();
    if(level == 1){
        score = 0;
        gameplayLoadLevel1(evt);
    }
    else if(level == 2){
        gameplayLoadLevel2(evt);
    }
    else if(level == 3){
        gameplayLoadLevel3(evt);
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

function showStar(numCollected){
    var star = new StarSprite(STAR_SPRITES);
    star.init(80 + numCollected * 40, 40);
    star.play("stationary");
    star.sprite.visible = true;
    scoreStars.push(star.sprite);
    console.log("GAH!");
}

function loadScoreStars(){
    starCount = 0;
    var star = new StarSprite(STAR_SPRITES);
    star.init(80, 40);
    star.play("stationary");
    star.sprite.visible = false;
    scoreStars.push(star.sprite);

    star = new StarSprite(STAR_SPRITES);
    star.init(120, 40);
    star.play("stationary");
    star.sprite.visible = false;
    scoreStars.push(star.sprite);
    
    star = new StarSprite(STAR_SPRITES);
    star.init(160, 40);
    star.play("stationary");
    star.sprite.visible = false;
    scoreStars.push(star.sprite);
}

function gameplayLoadLevel1(evt){
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
	redGoal.play("red", false);
	
	blueGoal = new GoalSprite(GOAL_SPRITES);
	blueGoal.init(20, 20);
	blueGoal.play("blue", false);
    
    loadScoreStars();

    player1 = new Player("Red");
	player1.init(evt, 30, 20);
	player2 = new Player("Blue");
	player2.init(evt, 735, 530);

    makeLevel1Walls();
    enemyManager.loadLevel1();
    loadTopUI(evt);
}
function gameplayLoadLevel2(evt){
    stars = [];
    
    var star = new StarSprite(STAR_SPRITES);
    star.init(170, 225);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);

    star = new StarSprite(STAR_SPRITES);
    star.init(580, 225);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);

    star = new StarSprite(STAR_SPRITES);
    star.init(375, 517.5);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);
	
	redGoal = new GoalSprite(GOAL_SPRITES);
	redGoal.init(432.5, 275);
	redGoal.play("red", false);
	
	blueGoal = new GoalSprite(GOAL_SPRITES);
	blueGoal.init(317.5, 275);
	blueGoal.play("blue", false);
    
    loadScoreStars();

    player1 = new Player("Red");
	player1.init(evt, 327.5, 275);
	player2 = new Player("Blue");
	player2.init(evt, 442.5, 275);

    makeLevel2Walls();
    enemyManager.loadLevel2();
    loadTopUI(evt);
}

function gameplayLoadLevel3(evt){
    stars = [];
    
    var star = new StarSprite(STAR_SPRITES);
    star.init(32.5, 32.5);
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

    star = new StarSprite(STAR_SPRITES);
    star.init(717.5, 517.5);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);
	
	redGoal = new GoalSprite(GOAL_SPRITES);
	redGoal.init(375, 517.5);
	redGoal.play("red", false);
	
	blueGoal = new GoalSprite(GOAL_SPRITES);
	blueGoal.init(375, 32.5);
	blueGoal.play("blue", false);
    
    loadScoreStars();

    player1 = new Player("Red");
	player1.init(evt, 385, 32.5);
	player2 = new Player("Blue");
	player2.init(evt, 385, 517.5);

    makeLevel3Walls();
    enemyManager.loadLevel3();
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
    addWall(95, 95, 15.25, 1);
    addWall(400, 95, 15.25, 1);
    
    addWall(95, 485, 15.25, 1);
    addWall(400, 485, 15.25, 1);
    
    addWall(95, 190, 2, 5.5);
    addWall(665, 190, 2, 5.5);
    
    addWall(95, 395, 2, 4.5);
    addWall(665, 395, 2, 4.5);
    
    //Inner walls
    addWall(95, 300, 10, 1);
    addWall(505, 300, 10, 1);
    
    addWall(255, 190, 2, 5.5);
    addWall(505, 190, 2, 5.5);
    
    addWall(255, 320, 2, 4.5);
    addWall(505, 320, 2, 4.5);
    
    //Mid wall
    addWall(380, 115, 2, 18.5);
}

function makeLevel3Walls(){
    //Outside walls
    addWall(0, 0, 1, 30);    
    addWall(780, 0, 1, 30);
    addWall(0, 0, 40, 1);
    addWall(0, 580, 40, 1);
    
    //horizontal long walls
    addWall(95, 95, 30.5, 1);
    addWall(95, 185, 34.25, 1);
    addWall(20, 395, 34.25, 1);
    addWall(95, 485, 30.5, 1);
    
    //horizontal mid short walls
    addWall(180, 280, 9, 2);
    addWall(440, 280, 9, 2);
    
    //verticle walls
    addWall(95, 205, 1, 5.75);
    addWall(685, 280, 1, 5.75);
}