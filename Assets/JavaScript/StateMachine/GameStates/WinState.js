function WinState() {
	State.call(this);
}
WinState.prototype = Object.create(State.prototype);
WinState.prototype.constuctor = WinState;

WinState.prototype.enter = enterWinState;
WinState.prototype.run = runWinState;
WinState.prototype.exit = exitWinState;

function enterWinState(evt) {
	enterWinScene(evt);
}
function runWinState(evt) {
}
function exitWinState(evt) {
	stage.removeAllChildren();
}
