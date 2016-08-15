var frameCount, gameTimer, FPS;
function timerInit() {
	resetGameTimer();
	
	FPS = 30;
	createjs.Ticker.addEventListener("tick", gameLoop);
	createjs.Ticker.setFPS(FPS);
}
function resetGameTimer() {
    gameTimer = 0;
	frameCount = 0;
}
function runGameTimer(evt) {
    frameCount += 1;
    if(frameCount%(FPS/10) === 0) {
        gameTimer = frameCount/(FPS);   
    }
}