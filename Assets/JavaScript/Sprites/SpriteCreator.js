var BLOCK_SPRITES		= 0;
var CHARACTER_SPRITES	= 1;
var REDENEMY_SPRITES    = 2;
var BLUENEMY_SPRITES    = 3;
var PURENEMY_SPRITES    = 4;

var NUM_SPRITES = 5;

var spriteList = [];

function spriteInit() {
	var blockSprite = loadSpriteBlock();
	var characterSprite = loadSpriteCharacter();
	var redEnemySprite = loadSpriteRedEnemy();
	var bluEnemySprite = loadSpriteBluEnemy();
    var purEnemySprite = loadSpritePurEnemy();
	
	spriteList[BLOCK_SPRITES] = blockSprite;
	spriteList[CHARACTER_SPRITES] = characterSprite;
	spriteList[REDENEMY_SPRITES] = redEnemySprite;
	spriteList[BLUENEMY_SPRITES] = bluEnemySprite;
	spriteList[PURENEMY_SPRITES] = purEnemySprite;
}
function getSprite(spriteValue) {
	var spriteRequest = spriteList[spriteValue].clone();
	return spriteRequest;
}
