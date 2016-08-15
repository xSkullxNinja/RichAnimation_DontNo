function BlockSprite() {
	Sprite.call(this);
	this.sprite = getSprite(BLOCK_SPRITES);
}
BlockSprite.prototype = Object.create(Sprite.prototype);
BlockSprite.prototype.constuctor = BlockSprite;

BlockSprite.prototype.init = setupBlockSprite;
BlockSprite.prototype.move = moveBlockSprite;
BlockSprite.prototype.change = playBlockSprite;

function setupBlockSprite(xPos, yPos, position) {
    stage.addChild(this.sprite);
    this.sprite.x = xPos;
    this.sprite.y = yPos;
    this.sprite.gotoAndPlay(position);
}
function moveBlockSprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}
function playBlockSprite(position) {
    this.sprite.gotoAndPlay(position);
}
