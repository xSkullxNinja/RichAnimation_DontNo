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
//        gameplayLoadLevel2(evt);
//        gameplayLoadLevel3(evt);
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
	player1 = new Player("Red");
	player1.init(evt, 30, 20);
	player2 = new Player("Blue");
	player2.init(evt, 735, 530);

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
    loadScoreStars();
}
function gameplayLoadLevel2(evt){
	player1 = new Player("Red");
	player1.init(evt, 350, 300);
	player2 = new Player("Blue");
	player2.init(evt, 450, 300);

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
	redGoal.init(450, 300);
	redGoal.play("red");
	
	blueGoal = new GoalSprite(GOAL_SPRITES);
	blueGoal.init(350, 300);
	blueGoal.play("blue");
    
    makeLevel2Walls();
    enemyManager.loadLevel2();
    loadTopUI(evt);
    loadScoreStars();
}

function gameplayLoadLevel3(evt){
	player1 = new Player("Red");
	player1.init(evt, 380, 30);
	player2 = new Player("Blue");
	player2.init(evt, 380, 530);

    stars = [];
    
    var star = new StarSprite(STAR_SPRITES);
    star.init(25.0, 30.0);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);

    star = new StarSprite(STAR_SPRITES);
    star.init(380.0, 285.0);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);

    star = new StarSprite(STAR_SPRITES);
    star.init(730.0, 520.0);
    star.play("starSpin");
	star.sprite.scaleX = 2;
	star.sprite.scaleY = 2;
    stars.push(star);
	
	redGoal = new GoalSprite(GOAL_SPRITES);
	redGoal.init(370, 520);
	redGoal.play("red");
	
	blueGoal = new GoalSprite(GOAL_SPRITES);
	blueGoal.init(370, 30);
	blueGoal.play("blue");
    
    makeLevel3Walls();
    enemyManager.loadLevel3();
    loadTopUI(evt);
    loadScoreStars();
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

function makeLevel3Walls(){
    //Outside walls
    addWall(0, 0, 1, 30);    
    addWall(780, 0, 1, 30);
    addWall(0, 0, 40, 1);
    addWall(0, 580, 40, 1);
    
    //horizontal long walls
    addWall(085, 090, 30, 01);
    addWall(085, 185, 35, 01);
    addWall(020, 385, 35, 01);
    addWall(085, 480, 30, 01);
    
    //horizontal mid short walls
    addWall(180, 280, 09, 02);
    addWall(440, 280, 09, 02);
    
    //verticle walls
    addWall(085, 200, 01, 05);
    addWall(700, 290, 01, 05);
}