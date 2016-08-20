function EnemySprite(spriteId) {
	Sprite.call(this);//PURPLE_ENEMY_SPRITES, RED_ENEMY_SPRITES, BLUE_ENEMY_SPRITES
    this.sprite = getSprite(spriteId);
}

EnemySprite.prototype = Object.create(StaticSprite.prototype);
EnemySprite.prototype.constuctor = EnemySprite;

EnemySprite.prototype.init = setupEnemySprite;
EnemySprite.prototype.move = moveEnemySprite;

function setupEnemySprite(xPos, yPos) {
    stage.addChild(this.sprite);
    this.move(xPos, yPos);
}
function moveEnemySprite(xPos, yPos) {
    this.sprite.x = xPos;
    this.sprite.y = yPos;
}
