function Player() {
	Character.call(this);
    this.shape;
    this.x;
    this.y;
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
    this.x = xPos;
    this.y = yPos;
    var graphics = new createjs.Graphics().beginFill("#FF0000").drawRect(0, 0, 50, 50);
    this.shape = new createjs.Shape(graphics);
    this.shape.x = this.x;
    this.shape.y = this.y;
    stage.addChild(this.shape);
}
function playerUpdate(evt) {
    
}
function movePlayerRight(evt) {
    this.x += 5;
    this.shape.x = this.x;
}
function movePlayerLeft(evt) {
    this.x -= 5;
    this.shape.x = this.x;
}
function movePlayerUp(evt) {
    this.y -= 5;
    this.shape.y = this.y;
}
function movePlayerDown(evt) {
    this.y += 5;
    this.shape.y = this.y;
}
