function MenuButton(buttonSprites) {
	Button.call(this);
	this.buttonSprite = buttonSprites;
}
MenuButton.prototype = Object.create(Button.prototype);
MenuButton.prototype.constuctor = MenuButton;

MenuButton.prototype.init = setupMenuButton;
MenuButton.prototype.click = clickedMenuButton;
MenuButton.prototype.mouseOver = mouseOverMenuButton;
MenuButton.prototype.mouseOut = mouseOutMenuButton;
MenuButton.prototype.mouseDown = mouseDownMenuButton;

function setupMenuButton(evt, xPos, yPos) {
	stage.addChild(this.buttonSprite);
	this.buttonSprite.x = xPos;
	this.buttonSprite.y = yPos;
	this.buttonSprite.gotoAndPlay("menuUp");
}
function clickedMenuButton(evt) {
	this.gotoAndPlay("menuOver");
	stateManager.change(evt, new MainMenuState());
}
function mouseOverMenuButton(evt) {
	this.gotoAndPlay("menuOver");
}
function mouseOutMenuButton(evt) {
	this.gotoAndPlay("menuUp");
}
function mouseDownMenuButton(evt) {
	this.gotoAndPlay("menuDown");
}
