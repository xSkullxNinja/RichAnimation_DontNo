function Player(color) {
	Character.call(this);
    this.shape;
	this.color = color;
}
Player.prototype = Object.create(Character.prototype);
Player.prototype.constuctor = Player;

Player.prototype.init = playerInit;
Player.prototype.update = playerUpdate;
Player.prototype.moveRight = movePlayerRight;
Player.prototype.moveLeft = movePlayerLeft;
Player.prototype.moveUp = movePlayerUp;
Player.prototype.moveDown = movePlayerDown;

function playerInit(evt, xPos, yPos) {
    var graphics = new createjs.Graphics().beginFill("#FF0000").drawRect(0, 0, 50, 50);
    if (this.color == "Blue") {
		this.shape = new createjs.Bitmap(queue.getResult("BluePlayer"));
	}
	else if (this.color == "Red") {
		this.shape = new createjs.Bitmap(queue.getResult("RedPlayer"));	
	}
    this.shape.x = xPos;
    this.shape.y = yPos;
    stage.addChild(this.shape);
}
function playerUpdate(evt) {
    
}
function movePlayerRight(evt) {
    this.shape.x += 5;
}
function movePlayerLeft(evt) {
    this.shape.x -= 5;
}
function movePlayerUp(evt) {
    this.shape.y -= 5;
}
function movePlayerDown(evt) {
    this.shape.y += 5;
}
