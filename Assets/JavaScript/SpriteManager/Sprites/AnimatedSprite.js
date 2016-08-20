function AnimatedSprite(spriteId) {
	Sprite.call(this);
}
AnimatedSprite.prototype = Object.create(Sprite.prototype);
AnimatedSprite.prototype.constuctor = AnimatedSprite;

AnimatedSprite.prototype.init = setupAnimatedSprite;
AnimatedSprite.prototype.move = moveAnimatedSprite;
AnimatedSprite.prototype.play = playAnimatedSprite;

function setupAnimatedSprite(xPos, yPos) {
}
function moveAnimatedSprite(xPos, yPos) {
}
function playAnimatedSprite(position) {
}