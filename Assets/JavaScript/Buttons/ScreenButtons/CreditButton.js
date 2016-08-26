function CreditButton(buttonSprites) {
	Button.call(this);
	this.buttonSprite = buttonSprites;
}
CreditButton.prototype = Object.create(Button.prototype);
CreditButton.prototype.constuctor = CreditButton;

CreditButton.prototype.init = setupCreditButton;
CreditButton.prototype.click = clickedCreditButton;
CreditButton.prototype.doubleClick = null;
CreditButton.prototype.rightClick = null;
CreditButton.prototype.mouseOver = mouseOverCreditButton;
CreditButton.prototype.mouseOut = mouseOutCreditButton;
CreditButton.prototype.mouseDown = mouseDownCreditButton;
CreditButton.prototype.mouseUp = mouseUpCreditButton;

function setupCreditButton(evt, xPos, yPos) {
	stage.addChild(this.buttonSprite);
	this.buttonSprite.x = xPos;
	this.buttonSprite.y = yPos;
	this.buttonSprite.gotoAndPlay("continueUp");
}
function clickedCreditButton(evt) {
	stateManager.change(evt, new CreditState());
}
function mouseOverCreditButton(evt) {
	this.gotoAndPlay("continueOver");
}
function mouseOutCreditButton(evt) {
	this.gotoAndPlay("continueUp");
}
function mouseDownCreditButton(evt) {
	this.gotoAndPlay("continueDown");
}
function mouseUpCreditButton(evt) {
	this.gotoAndPlay("continueOver");
}