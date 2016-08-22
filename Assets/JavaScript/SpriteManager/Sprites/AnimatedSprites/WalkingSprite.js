function WalkingSprite(spriteId) {
	Sprite.call(this);//CHARACTER_SPRITES
	this.sprite = getSprite(spriteId);
}
WalkingSprite.prototype = Object.create(AnimatedSprite.prototype);
WalkingSprite.prototype.constuctor = WalkingSprite;

WalkingSprite.prototype.init = setupWalkingSprite;
WalkingSprite.prototype.move = moveWalkingSprite;
WalkingSprite.prototype.play = playWalkingSprite;

function setupWalkingSprite(xPos, yPos) {
    stage.addChild(this.sprite);
    this.move(xPos, yPos);
}
function moveWalkingSprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}
function playWalkingSprite(position) {
    this.sprite.gotoAndPlay(position);
}