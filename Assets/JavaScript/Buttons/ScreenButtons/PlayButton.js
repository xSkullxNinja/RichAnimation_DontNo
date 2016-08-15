function PlayButton(buttonSprites) {
	Button.call(this);
	this.buttonSprite = buttonSprites;
}
PlayButton.prototype = Object.create(Button.prototype);
PlayButton.prototype.constuctor = PlayButton;

PlayButton.prototype.init = setupPlayButton;
PlayButton.prototype.click = clickedPlayButton;
PlayButton.prototype.mouseOver = mouseOverPlayButton;
PlayButton.prototype.mouseOut = mouseOutPlayButton;
PlayButton.prototype.mouseDown = mouseDownPlayButton;

function setupPlayButton(evt, xPos, yPos) {
	stage.addChild(this.buttonSprite);
	this.buttonSprite.x = xPos;
	this.buttonSprite.y = yPos;
	this.buttonSprite.gotoAndPlay("playUp");
}
function clickedPlayButton(evt) {
	this.gotoAndPlay("playOver");
	stateManager.change(evt, new LoadingLevelState());
}
function mouseOverPlayButton(evt) {
	this.gotoAndPlay("playOver");
}
function mouseOutPlayButton(evt) {
	this.gotoAndPlay("playUp");
}
function mouseDownPlayButton(evt) {
	this.gotoAndPlay("playDown");
}
