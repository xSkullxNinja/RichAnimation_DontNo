var BLOCK_SPRITES			= 0;
var CHARACTER_SPRITES		= 1;
var RED_ENEMY_SPRITES		= 2;
var BLUE_ENEMY_SPRITES		= 3;
var PURPLE_ENEMY_SPRITES	= 4;
var WALL_SPRITES			= 5;
var STAR_SPRITES			= 6;
var GOAL_SPRITES			= 7;

var NUM_SPRITES = 7;

var spriteList = [];

function spriteInit() {
	var blockSprite = loadSpriteBlock();
	var characterSprite = loadSpriteCharacter();
	var redEnemySprite = loadSpriteRedEnemy();
	var blueEnemySprite = loadSpriteBlueEnemy();
    var purpleEnemySprite = loadSpritePurpleEnemy();
    var wallSprite = loadSpriteWall();
    var starSprite = loadSpriteStar();
	var goalSprite = loadGoalSprite();
	
	spriteList[BLOCK_SPRITES] = blockSprite;
	spriteList[CHARACTER_SPRITES] = characterSprite;
	spriteList[RED_ENEMY_SPRITES] = redEnemySprite;
	spriteList[BLUE_ENEMY_SPRITES] = blueEnemySprite;
	spriteList[PURPLE_ENEMY_SPRITES] = purpleEnemySprite;
	spriteList[WALL_SPRITES] = wallSprite;
	spriteList[STAR_SPRITES] = starSprite;
	spriteList[GOAL_SPRITES] = goalSprite;
}
function getSprite(spriteValue) {
	var spriteRequest = spriteList[spriteValue].clone();
	return spriteRequest;
}
