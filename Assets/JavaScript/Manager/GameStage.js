var score;
var numCollected;
function initializeStage(evt) {
	stage.removeAllChildren();
}
function loadBackground(imageName, xPos, yPos) {
	var backgroundImage = new createjs.Bitmap(queue.getResult(imageName));
	if(xPos && yPos) {
		backgroundImage.x = xPos;
		backgroundImage.y = yPos;
	}
	stage.addChild(backgroundImage);
}
