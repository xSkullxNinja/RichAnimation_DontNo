function StaticSprite(spriteId) {
	Sprite.call(this);
}
StaticSprite.prototype = Object.create(Sprite.prototype);
StaticSprite.prototype.constuctor = StaticSprite;

StaticSprite.prototype.init = setupStaticSprite;
StaticSprite.prototype.move = moveStaticSprite;

function setupStaticSprite(xPos, yPos) {
}
function moveStaticSprite(xPos, yPos) {
}