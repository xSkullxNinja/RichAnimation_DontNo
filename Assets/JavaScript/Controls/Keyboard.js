var keyFunctions = [];

function handleKeyDown(evt) {
	if (keyFunctions[evt.keyCode] !== undefined && keyFunctions[evt.keyCode] !== null) {
		for(var keyFuncNum = 0; keyFuncNum < keyFunctions[evt.keyCode].down.length; ++keyFuncNum) {
			keyFunctions[evt.keyCode].down[keyFuncNum]();
		}
	}
}
function assignKeyDownFunction(keyCode, keyDownFunction) {
	if(keyFunctions[keyCode] === undefined || keyFunctions[keyCode] === null) {
		keyFunctions[keyCode] = { down: [], up: [] };
	}
	var pos = keyFunctions[keyCode].down.length;
	keyFunctions[keyCode].down[pos] = keyDownFunction;
}
function clearKeyDownFunctions(keyCode) {
	keyFunctions[keyCode].down = [];
}
function handleKeyUp(evt) {
	if (keyFunctions[evt.keyCode] !== undefined && keyFunctions[evt.keyCode] !== null) {
		for(var keyFuncNum = 0; keyFuncNum < keyFunctions[evt.keyCode].up.length; ++keyFuncNum) {
			keyFunctions[evt.keyCode].up[keyFuncNum]();
		}
	}
}
function assignKeyUpFunction(keyCode, keyUpFunction) {
	if(keyFunctions[keyCode] === undefined || keyFunctions[keyCode] === null) {
		keyFunctions[keyCode] = { down: [], up: [] };
	}
	var pos = keyFunctions[keyCode].up.length;
	keyFunctions[keyCode].up[pos] = keyUpFunction;
}
function clearKeyUpFunctions(keyCode) {
	keyFunctions[keyCode].up = [];
}
function clearAllKeyFunctions(keyCode) {
	keyFunctions[keyCode] = null;
}
function clearAllKeyCodes(keyCode) {
	keyFunctions = [];
}
 
document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;