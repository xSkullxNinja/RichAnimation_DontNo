function GameOverState() {
	State.call(this);
}
GameOverState.prototype = Object.create(State.prototype);
GameOverState.prototype.constuctor = GameOverState;

GameOverState.prototype.enter = enterGameOverState;
GameOverState.prototype.run = runGameOverState;
GameOverState.prototype.exit = exitGameOverState;

function enterGameOverState(evt) {
	enterGameOverScene(evt);
}
function runGameOverState(evt) {
}
function exitGameOverState(evt) {
	stage.removeAllChildren();
}
