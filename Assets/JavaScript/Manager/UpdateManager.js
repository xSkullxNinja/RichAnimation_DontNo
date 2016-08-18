function gameLoop(evt) {
	loopBeforeState(evt);
	stateManager.loop(evt);
	loopAfterState(evt);
	stage.update(evt);
}
function loopBeforeState(evt) {
	
}
function loopAfterState(evt) {
	handleKeyPress(evt);
}