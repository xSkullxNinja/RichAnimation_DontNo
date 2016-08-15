var PLAY_BUTTON			= 0;
var INSTRUCTION_BUTTON	= 1;
var MENU_BUTTON			= 2;
var CONTINUE_BUTTON		= 3;
var PLAY_AGAIN_BUTTON	= 4;
var MUTE_BUTTON			= 5;

var NUM_BUTTONS = 6;

var buttonList = [];

function buttonInit() {
	initializeScreenButtons();
}
function initializeScreenButtons() {
	var buttonSprite = loadScreenButton();
	buttonList[PLAY_BUTTON] = new PlayButton(buttonSprite.clone());
	buttonList[INSTRUCTION_BUTTON] = new InstructionButton(buttonSprite.clone());
	buttonList[MENU_BUTTON] = new MenuButton(buttonSprite.clone());
	buttonList[CONTINUE_BUTTON] = new ContinueButton(buttonSprite.clone());
	buttonList[PLAY_AGAIN_BUTTON] = new PlayAgainButton(buttonSprite.clone());
	buttonList[MUTE_BUTTON] = new MuteButton(buttonSprite.clone());
	
	addButtonEvents();
}
function addButtonEvents() {
	addEveryButtonEvent(PLAY_BUTTON);
	addEveryButtonEvent(INSTRUCTION_BUTTON);
	addEveryButtonEvent(MENU_BUTTON);
	addEveryButtonEvent(CONTINUE_BUTTON);
	addEveryButtonEvent(PLAY_AGAIN_BUTTON);
	addClick(MUTE_BUTTON)
}
function addEveryButtonEvent(buttonValue) {
	addClick(buttonValue);
	addMouseOver(buttonValue);
	addMouseOut(buttonValue);
	addMouseDown(buttonValue);
}
function addClick(buttonValue) {
	stage.addEventListener(buttonList[buttonValue].buttonSprite.on("click",		buttonList[buttonValue].click));
}
function addMouseOver(buttonValue) {
	stage.addEventListener(buttonList[buttonValue].buttonSprite.on("mouseover",	buttonList[buttonValue].mouseOver));
}
function addMouseOut(buttonValue) {
	stage.addEventListener(buttonList[buttonValue].buttonSprite.on("mouseout",	buttonList[buttonValue].mouseOut));
}
function addMouseDown(buttonValue) {
	stage.addEventListener(buttonList[buttonValue].buttonSprite.on("mousedown",	buttonList[buttonValue].mouseDown));
}
function getButton(buttonValue) {
	var buttonNext = buttonList[buttonValue];
	return buttonNext;
}