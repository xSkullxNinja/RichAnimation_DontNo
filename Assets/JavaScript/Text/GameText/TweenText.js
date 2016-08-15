function TweenText() {
	Text.call(this);
    this.text;
    this.staticText = "";
    this.size = "30";
    this.font = "Arial bold";
    this.color = "#ffffff";
}
TweenText.prototype = Object.create(Text.prototype);
TweenText.prototype.constuctor = TweenText;

TweenText.prototype.init = setupTweenText;
TweenText.prototype.move = moveTweenText;
TweenText.prototype.change = adjustTweenText;
function setupTweenText(xPos, yPos, container) {
	this.text = new createjs.Text(this.staticText + "0", this.size + "px " + this.font, this.color);
	this.text.x = xPos;
	this.text.y = yPos;
	container.addChild(this.text);
}
function moveTweenText(xPos, yPos) {
	this.text.x = xPos;
	this.text.y = yPos;
}
function adjustTweenText(levelNum) {
	this.text.text = this.staticText + levelNum;
}