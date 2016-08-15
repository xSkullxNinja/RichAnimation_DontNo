function ScoreText() {
	Text.call(this);
    this.text;
    this.staticText = "Score: ";
    this.size = "12";
    this.font = "Arial";
    this.color = "#ffffff";
}
ScoreText.prototype = Object.create(Text.prototype);
ScoreText.prototype.constuctor = ScoreText;

ScoreText.prototype.init = setupScoreText;
ScoreText.prototype.move = moveScoreText;
ScoreText.prototype.change = adjustScoreText;
function setupScoreText(xPos, yPos, container) {
	this.text = new createjs.Text(this.staticText + "0", this.size + "px " + this.font, this.color);
	this.text.x = xPos;
	this.text.y = yPos;
	container.addChild(this.text);
}
function moveScoreText(xPos, yPos) {
	this.text.x = xPos;
	this.text.y = yPos;
}
function adjustScoreText(newScore) {
	this.text.text = this.staticText + newScore;
}