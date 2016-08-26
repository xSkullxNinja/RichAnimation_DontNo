var PLAY_BUTTON			= 0;
var INSTRUCTION_BUTTON	= 1;
var MENU_BUTTON			= 2;
var CONTINUE_BUTTON		= 3;
var PLAY_AGAIN_BUTTON	= 4;
var MUTE_BUTTON			= 5;
var CREDIT_BUTTON       = 6;

var NUM_BUTTONS = 7;

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
	buttonList[CREDIT_BUTTON] = new CreditButton(buttonSprite.clone());
	
	addButtonEvents();
}
function addButtonEvents() {
	addEveryButtonEvent(PLAY_BUTTON);
	addEveryButtonEvent(INSTRUCTION_BUTTON);
	addEveryButtonEvent(MENU_BUTTON);
	addEveryButtonEvent(CONTINUE_BUTTON);
	addEveryButtonEvent(PLAY_AGAIN_BUTTON);
	addEveryButtonEvent(MUTE_BUTTON);
	addEveryButtonEvent(CREDIT_BUTTON);
}
function addEveryButtonEvent(buttonValue) {
	addClick(buttonValue);
	addDoubleClick(buttonValue);
	addRightClick(buttonValue);
	addMouseOver(buttonValue);
	addMouseOut(buttonValue);
	addMouseDown(buttonValue);
	addMouseUp(buttonValue);
}
function addClick(buttonValue) {
	if(buttonList[buttonValue].click !== null) {
		stage.addEventListener(buttonList[buttonValue].buttonSprite.on("click",			buttonList[buttonValue].click));
	}
}
function addDoubleClick(buttonValue) {
	if(buttonList[buttonValue].doubleClick !== null) {
		stage.addEventListener(buttonList[buttonValue].buttonSprite.on("dblclick",		buttonList[buttonValue].doubleClick));
	}
}
function addRightClick(buttonValue) {
	if(buttonList[buttonValue].rightClick !== null) {
		stage.addEventListener(buttonList[buttonValue].buttonSprite.on("contextmenu",	buttonList[buttonValue].rightClick));
	}
}
function addMouseOver(buttonValue) {
	if(buttonList[buttonValue].mouseOver !== null) {
		stage.addEventListener(buttonList[buttonValue].buttonSprite.on("mouseover",		buttonList[buttonValue].mouseOver));
	}
}
function addMouseOut(buttonValue) {
	if(buttonList[buttonValue].mouseOut !== null) {
		stage.addEventListener(buttonList[buttonValue].buttonSprite.on("mouseout",		buttonList[buttonValue].mouseOut));
	}
}
function addMouseDown(buttonValue) {
	if(buttonList[buttonValue].mouseDown !== null) {
		stage.addEventListener(buttonList[buttonValue].buttonSprite.on("mousedown",		buttonList[buttonValue].mouseDown));
	}
}
function addMouseUp(buttonValue) {
	if(buttonList[buttonValue].mouseUp !== null) {
		stage.addEventListener(buttonList[buttonValue].buttonSprite.on("mouseup",		buttonList[buttonValue].mouseUp));
	}
}
function getButton(buttonValue) {
	var buttonNext = buttonList[buttonValue];
	return buttonNext;
}