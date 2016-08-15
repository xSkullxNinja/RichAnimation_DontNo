function MouseText() {
	Text.call(this);
    this.text;
    this.staticText = "Mouse Position: ";
    this.size = "12";
    this.font = "Arial";
    this.color = "#ffffff";
}
MouseText.prototype = Object.create(Text.prototype);
MouseText.prototype.constuctor = MouseText;

MouseText.prototype.init = setupMouseText;
MouseText.prototype.move = moveMouseText;
MouseText.prototype.change = adjustMouseText;
function setupMouseText(xPos, yPos, container) {
	this.text = new createjs.Text(this.staticText + "(0, 0)", this.size + "px " + this.font, this.color);
	this.text.x = xPos;
	this.text.y = yPos;
	container.addChild(this.text);
}
function moveMouseText(xPos, yPos) {
	this.text.x = xPos;
	this.text.y = yPos;
}
function adjustMouseText(mousePos) {
	this.text.text = this.staticText + "(" + mousePos.x + ", " + mousePos.y + ")";
}