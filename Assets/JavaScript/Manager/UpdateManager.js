function gameLoop(evt) {
	loopBeforeState(evt);
	stateManager.loop(evt);
	loopAfterState(evt);
	stage.update(evt);
}
function loopBeforeState(evt) {
	runGameTimer(evt);
}
function loopAfterState(evt) {

}