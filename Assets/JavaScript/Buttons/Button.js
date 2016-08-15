function Button() {
}

Button.prototype.init = setupDefaultButton;
Button.prototype.click = clickedDefaultButton;
Button.prototype.mouseOver = mouseOverDefaultButton;
Button.prototype.mouseOut = mouseOutDefaultButton;
Button.prototype.mouseDown = mouseDownDefaultButton;

function setupDefaultButton(evt, xPos, yPos) {
	console.log("Default Button");
}
function clickedDefaultButton(evt) {
	console.log("Default Button Clicked");
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
