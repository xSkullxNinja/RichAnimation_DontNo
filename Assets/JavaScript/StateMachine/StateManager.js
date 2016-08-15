function StateManager() {
	var currentState;
}
StateManager.prototype.init = StateInit;
StateManager.prototype.loop = StateLoop;
StateManager.prototype.change = ChangeState;

function StateInit(evt) {
	this.currentState = new MainMenuState();
	this.currentState.enter(evt);
}
function StateLoop(evt) {
	this.currentState.run(evt);
}
function ChangeState(evt, newState) {
	this.currentState.exit(evt);
	this.currentState = newState;
	this.currentState.enter(evt);
}