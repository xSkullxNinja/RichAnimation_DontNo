function LoadingLevelState() {
	State.call(this);
}
LoadingLevelState.prototype = Object.create(State.prototype);
LoadingLevelState.prototype.constuctor = LoadingLevelState;

LoadingLevelState.prototype.enter = enterLoadingLevelState;
LoadingLevelState.prototype.run = runLoadingLevelState;
LoadingLevelState.prototype.exit = exitLoadingLevelState;

function enterLoadingLevelState(evt) {
	enterGamePlayScene(evt);
	enterLoadingLevelScene(evt);
}
function runLoadingLevelState(evt) {
}
function exitLoadingLevelState(evt) {
	stage.removeAllChildren();
}
