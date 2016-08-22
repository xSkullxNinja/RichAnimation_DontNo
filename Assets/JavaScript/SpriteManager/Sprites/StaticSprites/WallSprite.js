function WallSprite(spriteId) {
	Sprite.call(this);//WALL_SPRITE
    this.sprite = getSprite(spriteId);
}

WallSprite.prototype = Object.create(StaticSprite.prototype);
WallSprite.prototype.constuctor = WallSprite;

WallSprite.prototype.init = setupWallSprite;
WallSprite.prototype.move = moveWallSprite;

function setupWallSprite(xPos, yPos) {
    stage.addChild(this.sprite);
    this.move(xPos, yPos);
}
function moveWallSprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}
