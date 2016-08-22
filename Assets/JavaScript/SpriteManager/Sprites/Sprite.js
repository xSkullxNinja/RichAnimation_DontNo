function Sprite(spriteId) {
}

Sprite.prototype.init = setupDefaultSprite;
Sprite.prototype.move = moveDefaultSprite;

function setupDefaultSprite(xPos, yPos) {
	console.log("Default Sprite");
}
function moveDefaultSprite(xPos, yPos) {
	console.log("Default Sprite Moved");
}