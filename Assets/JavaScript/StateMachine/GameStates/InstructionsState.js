function InstructionsState() {
	State.call(this);
}
InstructionsState.prototype = Object.create(State.prototype);
InstructionsState.prototype.constuctor = InstructionsState;

InstructionsState.prototype.enter = enterInstructionsState;
InstructionsState.prototype.run = runInstructionsState;
InstructionsState.prototype.exit = exitInstructionsState;

function enterInstructionsState(evt) {
	enterInstructionsScene(evt);
}
function runInstructionsState(evt) {
}
function exitInstructionsState(evt) {
	stage.removeAllChildren();
}
