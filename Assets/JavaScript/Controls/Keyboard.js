var keyFunctions = [];

function handleKeyDown(evt) {
	if (keyFunctions[evt.keyCode] !== undefined && keyFunctions[evt.keyCode] !== null) {
		if(!keyFunctions[evt.keyCode].value) {
			for(var keyFuncNum = 0; keyFuncNum < keyFunctions[evt.keyCode].down.length; ++keyFuncNum) {
				keyFunctions[evt.keyCode].down[keyFuncNum]();
			}
			keyFunctions[evt.keyCode].value = true;
		}
	}
}
function assignKeyDownFunction(keyCode, keyDownFunction) {
	if(keyFunctions[keyCode] === undefined || keyFunctions[keyCode] === null) {
		keyFunctions[keyCode] = { value: false, down: [], up: [], press: [] };
	}
	var pos = keyFunctions[keyCode].down.length;
	keyFunctions[keyCode].down[pos] = keyDownFunction;
}
function handleKeyPress(evt) {
	if (keyFunctions !== undefined && keyFunctions !== null) {
		for(var keyNum = 0; keyNum < keyFunctions.length; ++keyNum) {
			if(keyFunctions[keyNum].value) {
				for(var keyFuncNum = 0; keyFuncNum < keyFunctions[keyNum].press.length; ++keyFuncNum) {
					keyFunctions[keyNum].press[keyFuncNum]();
				}
			}
		}
	}
}
function assignKeyPressFunction(keyCode, keyPressFunction) {
	if(keyFunctions[keyCode] === undefined || keyFunctions[keyCode] === null) {
		keyFunctions[keyCode] = { value: false, down: [], up: [], press: [] };
	}
	var pos = keyFunctions[keyCode].press.length;
	keyFunctions[keyCode].press[pos] = keyPressFunction;
}
function handleKeyUp(evt) {
	if (keyFunctions[evt.keyCode] !== undefined && keyFunctions[evt.keyCode] !== null) {
		if(keyFunctions[evt.keyCode].value) {
			for(var keyFuncNum = 0; keyFuncNum < keyFunctions[evt.keyCode].up.length; ++keyFuncNum) {
				keyFunctions[evt.keyCode].up[keyFuncNum]();
			}
			keyFunctions[evt.keyCode].value = false;
		}
	}
}
function assignKeyUpFunction(keyCode, keyUpFunction) {
	if(keyFunctions[keyCode] === undefined || keyFunctions[keyCode] === null) {
		keyFunctions[keyCode] = { value: false, down: [], up: [], press: [] };
	}
	var pos = keyFunctions[keyCode].up.length;
	keyFunctions[keyCode].up[pos] = keyUpFunction;
}

function clearKeyDownFunctions(keyCode) {
	keyFunctions[keyCode].down = [];
}
function clearKeyPressFunctions(keyCode) {
	keyFunctions[keyCode].press = [];
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