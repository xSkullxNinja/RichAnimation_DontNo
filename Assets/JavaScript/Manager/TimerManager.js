var frameCount, gameTimer, FPS, dt;
var prevTime = 0;
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
    prevTime = gameTimer;
    frameCount += 1;
    if(frameCount%(FPS/10) === 0) {
        gameTimer = frameCount/(FPS);   
    }
    dt = gameTimer - prevTime;
}