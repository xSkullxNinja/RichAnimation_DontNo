var BLOCK_SPRITES		= 0;
var CHARACTER_SPRITES	= 1;

var NUM_SPRITES = 2;

var spriteList = [];

function spriteInit() {
	var blockSprite = loadSpriteBlock();
	var characterSprite = loadSpriteCharacter();
	
	spriteList[BLOCK_SPRITES] = blockSprite;
	spriteList[CHARACTER_SPRITES] = characterSprite;
}
function getSprite(spriteValue) {
	var spriteRequest = spriteList[spriteValue].clone();
	return spriteRequest;
}
