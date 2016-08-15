var walker;
var mouseText, scoreText;
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
	mouseText.change(getMousePosition());
	scoreText.change(highScore);
}
