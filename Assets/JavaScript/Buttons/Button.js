function Button() {
}

Button.prototype.init = setupDefaultButton;
Button.prototype.click = clickedDefaultButton;
Button.prototype.doubleClick = doubleClickDefaultButton;
Button.prototype.rightClick = contextMenuDefaultButton;
Button.prototype.mouseOver = mouseOverDefaultButton;
Button.prototype.mouseOut = mouseOutDefaultButton;
Button.prototype.mouseDown = mouseDownDefaultButton;
Button.prototype.mouseUp = mouseUpDefaultButton;

function setupDefaultButton(evt, xPos, yPos) {
	console.log("Default Button");
}
function clickedDefaultButton(evt) {
	console.log("Default Button Clicked");
}
function doubleClickDefaultButton(evt) {
	console.log("Default Button Mouse Down");
}
function contextMenuDefaultButton(evt) {
	console.log("Default Button Mouse Down");
}
function mouseOverDefaultButton(evt) {
	console.log("Default Button Mouse Over");
}
function mouseOutDefaultButton(evt) {
	console.log("Default Button Mouse Out");
}
function mouseDownDefaultButton(evt) {
	console.log("Default Button Mouse Down");
}
function mouseUpDefaultButton(evt) {
	console.log("Default Button Mouse Down");
}
