function Sprite() {
}

Sprite.prototype.init = setupDefaultSprite;
Sprite.prototype.move = moveSpriteSprite;
Sprite.prototype.change = playSpriteSprite;

function setupDefaultSprite(xPos, yPos, position) {
	console.log("Default Sprite");
}
function moveSpriteSprite(xPos, yPos) {
	console.log("Default Sprite Moved");
}
function playSpriteSprite(position) {
	console.log("Default Sprite Play");
}
