var queue;
var stage;
var canvasContext;
var numPoints = 0;
var BAR_WIDTH = 500;

manifest = [
	{
		src: "JavaScript/Manifest.js"
	}
];
function loadMyManifest() {	
    queue = new createjs.LoadQueue(true, "Assets/");
    
    queue.on("complete", loadFiles, this);
    queue.loadManifest(manifest);
}
function loadFiles(evt) {
	manifest = getManifest();
    createjs.Sound.alternateExtensions = ["mp3"];
    queue = new createjs.LoadQueue(true, "Assets/");
    
    queue.installPlugin(createjs.Sound);

	queue.on("fileprogress", loading, this);
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}
function loadComplete(evt) {
	initializeGame(evt);
}
function setupCanvas() {
	var canvas = document.getElementById("game");
	canvas.width = 800;
	canvas.height = 600;
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver();

	canvasContext = canvas.getContext("2d");
	var imageObj = new Image();
    imageObj.onload = function() {
		canvasContext.drawImage(imageObj, 0, 0);
    };
    imageObj.src = 'Assets/Images/Backgrounds/LoadingBackground.jpg';

	canvasContext.strokeStyle = "green";
	canvasContext.fillStyle = "red";
	canvasContext.lineWidth = 10
}
function main() {
	setupCanvas();
	loadMyManifest();
}
function loading(evt) {
	numPoints += 1;
	if(numPoints > queue._numItems) {
		numPoints = queue._numItems;
	}
	var barWidth = numPoints / queue._numItems;

	canvasContext.strokeRect(145, 295, 510, 60);
	canvasContext.fillRect(150, 300, BAR_WIDTH * barWidth, 50);
	canvasContext.stroke();
	canvasContext.fill();
}
main();
