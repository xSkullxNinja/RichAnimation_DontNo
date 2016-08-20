function BlockSprite(spriteId) {
	Sprite.call(this);//BLOCK_SPRITES
	this.sprite = getSprite(spriteId);
}

BlockSprite.prototype = Object.create(StaticSprite.prototype);
BlockSprite.prototype.constuctor = BlockSprite;

BlockSprite.prototype.init = setupBlockSprite;
BlockSprite.prototype.move = moveBlockSprite;

function setupBlockSprite(xPos, yPos) {
    stage.addChild(this.sprite);
    this.move(xPos, yPos);
}
function moveBlockSprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}

