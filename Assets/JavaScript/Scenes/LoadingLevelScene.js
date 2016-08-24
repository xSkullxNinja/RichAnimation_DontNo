var level = 1;
function beginTween(evt, myTweener) {
	var myTween = createjs.Tween.get(myTweener,{loop:false})
        .wait(0)
        .to({x:300, y:200, rotation:0}, 1500, createjs.Ease.bounceOut)
        .wait(2000)
        .to({y:500, rotation:0}, 1000, createjs.Ease.backIn)
        .call(stateManager.change, [evt, new GamePlayState()], stateManager);
}
function enterLoadingLevelScene(evt) {
	var myTweener = new createjs.Container();
	myTweener.width = 200;
	myTweener.height = 150;
	myTweener.x = 300;
	myTweener.y = -150;
	myTweener.addChild(new createjs.Bitmap(queue.getResult("LevelLoad")));

	var tweenText = new TweenText();
	tweenText.init(90, 75, myTweener);
	tweenText.change(level);

	stage.addChild(myTweener);
	beginTween(evt, myTweener);
}
