function ContinueButton(buttonSprites) {
	Button.call(this);
	this.buttonSprite = buttonSprites;
}
ContinueButton.prototype = Object.create(Button.prototype);
ContinueButton.prototype.constuctor = ContinueButton;

ContinueButton.prototype.init = setupContinueButton;
ContinueButton.prototype.click = clickedContinueButton;
ContinueButton.prototype.doubleClick = null;
ContinueButton.prototype.rightClick = null;
ContinueButton.prototype.mouseOver = mouseOverContinueButton;
ContinueButton.prototype.mouseOut = mouseOutContinueButton;
ContinueButton.prototype.mouseDown = mouseDownContinueButton;
ContinueButton.prototype.mouseUp = mouseUpContinueButton;

function setupContinueButton(evt, xPos, yPos) {
	stage.addChild(this.buttonSprite);
	this.buttonSprite.x = xPos;
	this.buttonSprite.y = yPos;
	this.buttonSprite.gotoAndPlay("continueUp");
}
function clickedContinueButton(evt) {
	stateManager.change(evt, new GamePlayState());
}
function mouseOverContinueButton(evt) {
	this.gotoAndPlay("continueOver");
}
function mouseOutContinueButton(evt) {
	this.gotoAndPlay("continueUp");
}
function mouseDownContinueButton(evt) {
	this.gotoAndPlay("continueDown");
}
function mouseUpContinueButton(evt) {
	this.gotoAndPlay("continueOver");
}