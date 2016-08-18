var score;
var numCollected;
function initializeStage(evt) {
	stage.removeAllChildren();
}
function loadBackground(imageName) {
	var backgroundImage = new createjs.Bitmap(queue.getResult(imageName));
	stage.addChild(backgroundImage);
}
