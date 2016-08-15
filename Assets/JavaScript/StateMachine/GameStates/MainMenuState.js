function MainMenuState() {
	State.call(this);
}
MainMenuState.prototype = Object.create(State.prototype);
MainMenuState.prototype.constuctor = MainMenuState;

MainMenuState.prototype.enter = enterMainMenuState;
MainMenuState.prototype.run = runMainMenuState;
MainMenuState.prototype.exit = exitMainMenuState;

function enterMainMenuState(evt) {
	enterMainMenuScene(evt);
}
function runMainMenuState(evt) {
}
function exitMainMenuState(evt) {
	stage.removeAllChildren();
}