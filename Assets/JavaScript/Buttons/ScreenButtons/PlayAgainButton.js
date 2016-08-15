function PlayAgainButton(buttonSprites) {
	Button.call(this);
	this.buttonSprite = buttonSprites;
}
PlayAgainButton.prototype = Object.create(Button.prototype);
PlayAgainButton.prototype.constuctor = PlayAgainButton;

PlayAgainButton.prototype.init = setupPlayAgainButton;
PlayAgainButton.prototype.click = clickedPlayAgainButton;
PlayAgainButton.prototype.mouseOver = mouseOverPlayAgainButton;
PlayAgainButton.prototype.mouseOut = mouseOutPlayAgainButton;
PlayAgainButton.prototype.mouseDown = mouseDownPlayAgainButton;

function setupPlayAgainButton(evt, xPos, yPos) {
	stage.addChild(this.buttonSprite);
	this.buttonSprite.x = xPos;
	this.buttonSprite.y = yPos;
	this.buttonSprite.gotoAndPlay("playAgainUp");
}
function clickedPlayAgainButton(evt) {
	this.gotoAndPlay("playAgainOver");
	stateManager.change(evt, new LoadingLevelState());
}
function mouseOverPlayAgainButton(evt) {
	this.gotoAndPlay("playAgainOver");
}
function mouseOutPlayAgainButton(evt) {
	this.gotoAndPlay("playAgainUp");
}
function mouseDownPlayAgainButton(evt) {
	this.gotoAndPlay("playAgainDown");
}
