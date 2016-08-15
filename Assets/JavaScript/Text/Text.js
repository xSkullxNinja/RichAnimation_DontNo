function Text() {
    this.text;
    this.staticText = "Default: ";
    this.size = "12";
    this.font = "Arial";
    this.color = "#ffffff";
}
Text.prototype.init = setupDefaultText;
Text.prototype.move = moveDefaultText;
Text.prototype.change = adjustDefaultText;

function setupDefaultText(xPos, yPos, container) {
	this.text = new createjs.Text(this.staticText + "0", this.size + "px " + this.font, this.color);
	this.text.x = xPos;
	this.text.y = yPos;
	container.addChild(this.text);
}
function moveDefaultText(xPos, yPos) {
	this.text.x = xPos;
	this.text.y = yPos;
}
function adjustDefaultText(newText) {
	this.text = this.staticText + newText;
}