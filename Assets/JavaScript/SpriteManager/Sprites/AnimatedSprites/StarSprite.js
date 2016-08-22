function StarSprite(spriteId) {
	Sprite.call(this);//STAR_SPRITE
    this.sprite = getSprite(spriteId);
}

StarSprite.prototype = Object.create(AnimatedSprite.prototype);
StarSprite.prototype.constuctor = StarSprite;

StarSprite.prototype.init = setupStarSprite;
StarSprite.prototype.move = moveStarSprite;
StarSprite.prototype.play = playStarSprite;

function setupStarSprite(xPos, yPos) {
    stage.addChild(this.sprite);
    this.move(xPos, yPos);
}
function moveStarSprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}
function playStarSprite(position) {
    this.sprite.gotoAndPlay(position);
}
