function InstructionButton(buttonSprites) {
	Button.call(this);
	this.buttonSprite = buttonSprites;
}
InstructionButton.prototype = Object.create(Button.prototype);
InstructionButton.prototype.constuctor = InstructionButton;

InstructionButton.prototype.init = setupInstructionButton;
InstructionButton.prototype.click = clickedInstructionButton;
InstructionButton.prototype.mouseOver = mouseOverInstructionButton;
InstructionButton.prototype.mouseOut = mouseOutInstructionButton;
InstructionButton.prototype.mouseDown = mouseDownInstructionButton;

function setupInstructionButton(evt, xPos, yPos) {
	stage.addChild(this.buttonSprite);
	this.buttonSprite.x = xPos;
	this.buttonSprite.y = yPos;
	this.buttonSprite.gotoAndPlay("instructUp");
}
function clickedInstructionButton(evt) {
	this.gotoAndPlay("instructOver");
	stateManager.change(evt, new InstructionsState());
}
function mouseOverInstructionButton(evt) {
	this.gotoAndPlay("instructOver");
}
function mouseOutInstructionButton(evt) {
	this.gotoAndPlay("instructUp");
}
function mouseDownInstructionButton(evt) {
	this.gotoAndPlay("instructDown");
}