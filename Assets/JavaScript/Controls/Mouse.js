var mouseX, mouseY;
function mouseInit() {
	stage.on("stagemousemove", function(evt) {
		mouseX = Math.floor(evt.stageX);
		mouseY = Math.floor(evt.stageY);
	});
}
function getMousePosition() {
	return { x: mouseX, y: mouseY };
}
