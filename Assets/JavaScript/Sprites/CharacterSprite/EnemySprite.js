function EnemySprite(color) {
	Sprite.call(this);
    //Get this to create correct sprite
    this.sprite = getSprite(PURENEMY_SPRITES);
    if(color === "Red"){
        this.sprite = getSprite(REDENEMY_SPRITES);
    }
    else if(color === "Blue"){
        this.sprite = getSprite(BLUENEMY_SPRITES);
    }
}

EnemySprite.prototype = Object.create(Sprite.prototype);
EnemySprite.prototype.constuctor = EnemySprite;

EnemySprite.prototype.init = setupEnemySprite;
EnemySprite.prototype.move = moveEnemySprite;
EnemySprite.prototype.change = playEnemySprite;

//No animation yet, so position is not valid
function setupEnemySprite(xPos, yPos/*, position*/) {
    stage.addChild(this.sprite);
    this.sprite.x = xPos;
    this.sprite.y = yPos;
//    this.sprite.gotoAndPlay(position);
}
function moveEnemySprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}
function playEnemySprite(position) {
    this.sprite.gotoAndPlay(position);
}
