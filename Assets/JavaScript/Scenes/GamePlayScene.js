var walker;
var mouseText, scoreText;
var wall;
function enterGamePlayScene(evt) {
	loadBackground("GamePlayBackground");
	var menuButton = getButton(MENU_BUTTON);
	var muteButton = getButton(MUTE_BUTTON);
	walker = new WalkingSprite();
	mouseText = new MouseText();
	scoreText = new ScoreText();

	menuButton.init(evt, 673, 534);
	muteButton.init(evt, 33, 534);
	mouseText.init(315, 165, stage);
	scoreText.init(365, 200, stage);
	
	//wall = new createjs.Bitmap(queue.getResult("Wall"));
	//wall.x = 535;
	//wall.y = 300;
	//stage.addChild(wall);
	
	//newWall = new createjs.Bitmap(queue.getResult("Wall"));
	//newWall.x = 490;
	//newWall.y = 300;
	//newWall.rotation = 90;
	//stage.addChild(newWall);
	
	//collisionChecker.addCollider(wall);
	//collisionChecker.addCollider(newWall);
	
	walker.init(400, 400, "standRight");
	highScore = 0;
}
var goingRight;
var moving;
function moveRight() {
	if(!moving) {
		walker.change("walkRight");
		goingRight = true;
		moving = true;
	}
}
function stopRight() {
	 if(moving && goingRight) {
		walker.change("standRight");
		moving = false;
	}
}
function moveLeft() {
	if( !moving) {
		walker.change("walkLeft");
		goingRight = false;
		moving = true;
	}
}
function stopLeft() {
	if(moving && !goingRight) {
		walker.change("standLeft");
		moving = false;
	}
}
function runGamePlayScene(evt) {
	highScore = gameTimer;
	if(moving && goingRight) {
		walker.move(walker.sprite.x + 2, walker.sprite.y);
	}
	else if(moving && !goingRight) {
		walker.move(walker.sprite.x - 2, walker.sprite.y);
	}
	
	if(walker.sprite.x > 800) {
		walker.move(25, walker.sprite.y);
	}
	else if (walker.sprite.x < 0) {
		walker.move(775, walker.sprite.y);
	}
	if(gameTimer >= 10) {
		stateManager.change(evt, new GameOverState());
	}
	//collisionChecker.pushBackIfColliding(walker.sprite);
	mouseText.change(getMousePosition());
	scoreText.change(highScore);
}

//Width: [21.949] Height: [1.6]
//Width: [1.95] Height: [43]