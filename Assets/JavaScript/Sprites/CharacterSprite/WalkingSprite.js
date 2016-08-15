function WalkingSprite() {
	Sprite.call(this);
	this.sprite = getSprite(CHARACTER_SPRITES);
}
WalkingSprite.prototype = Object.create(Sprite.prototype);
WalkingSprite.prototype.constuctor = WalkingSprite;

WalkingSprite.prototype.init = setupWalkingSprite;
WalkingSprite.prototype.move = moveWalkingSprite;
WalkingSprite.prototype.change = playWalkingSprite;

function setupWalkingSprite(xPos, yPos, position) {
    stage.addChild(this.sprite);
    this.sprite.x = xPos;
    this.sprite.y = yPos;
    this.sprite.gotoAndPlay(position);
}
function moveWalkingSprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}
function playWalkingSprite(position) {
    this.sprite.gotoAndPlay(position);
}