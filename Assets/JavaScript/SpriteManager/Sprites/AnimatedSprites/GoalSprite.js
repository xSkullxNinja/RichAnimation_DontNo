function GoalSprite(spriteId) {
	Sprite.call(this);//Goal Sprite
    this.sprite = getSprite(spriteId);
}

GoalSprite.prototype = Object.create(AnimatedSprite.prototype);
GoalSprite.prototype.constuctor = StarSprite;

GoalSprite.prototype.init = setupGoalSprite;
GoalSprite.prototype.move = moveGoalSprite;
GoalSprite.prototype.play = playGoalSprite;

function setupGoalSprite(xPos, yPos) {
    stage.addChild(this.sprite);
    this.move(xPos, yPos);
}
function moveGoalSprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}
function playGoalSprite(position) {
	if (position == "reached" && this.sprite.curentAnimation != "reached") {
		goalSound.play();
	}
	this.sprite.gotoAndPlay(position);
}
