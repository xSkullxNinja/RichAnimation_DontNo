function Player(color) {
	Character.call(this);
    this.shape;
	this.color = color;
	this.currentAnimation;
}
Player.prototype = Object.create(Character.prototype);
Player.prototype.constuctor = Player;

Player.prototype.init = playerInit;
Player.prototype.update = playerUpdate;
Player.prototype.moveRight = movePlayerRight;
Player.prototype.moveLeft = movePlayerLeft;
Player.prototype.moveUp = movePlayerUp;
Player.prototype.moveDown = movePlayerDown;
Player.prototype.stopPlayer = stopPlayer;

function playerInit(evt, xPos, yPos) {
    var graphics = new createjs.Graphics().beginFill("#FF0000").drawRect(0, 0, 50, 50);
    if (this.color == "Blue") {
		this.shape = bluePlayerSprite();
	}
	else if (this.color == "Red") {
		this.shape = redPlayerSprite();
	}
	this.curentAnimation = "stand"
	this.shape.gotoAndPlay("stand");
    this.shape.x = xPos;
    this.shape.y = yPos;
    stage.addChild(this.shape);
}

function playerUpdate() {}

function stopPlayer() {
	this.shape.gotoAndPlay("stand");
	this.currentAnimation = "stand";
}

function movePlayerRight() {
	if (this.currentAnimation != "walk") {
		this.currentAnimation = "walk";
		this.shape.gotoAndPlay("walk");	
	}
    this.shape.x += 5;
}
function movePlayerLeft() {
    if (this.currentAnimation != "walk") {
		this.currentAnimation = "walk";
		this.shape.gotoAndPlay("walk");	
	}
	this.shape.x -= 5;
}
function movePlayerUp() {
	if (this.currentAnimation != "walk") {
		this.currentAnimation = "walk";
		this.shape.gotoAndPlay("walk");	
	}
    this.shape.y -= 5;
}
function movePlayerDown() {
	if (this.currentAnimation != "walk") {
		this.currentAnimation = "walk";
		this.shape.gotoAndPlay("walk");	
	}
    this.shape.y += 5;
}