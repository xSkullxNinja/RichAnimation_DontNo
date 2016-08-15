function MuteButton(buttonSprites) {
	Button.call(this);
	this.buttonSprite = buttonSprites;
}
MuteButton.prototype = Object.create(Button.prototype);
MuteButton.prototype.constuctor = MuteButton;

MuteButton.prototype.init = setupMuteButton;
MuteButton.prototype.click = clickedMuteButton;

function setupMuteButton(evt, xPos, yPos) {
	stage.addChild(this.buttonSprite);
	this.buttonSprite.x = xPos;
	this.buttonSprite.y = yPos;
	if(areAllSoundsMuted()) {
		this.buttonSprite.gotoAndPlay("muteOn");
	}
	else {
		this.buttonSprite.gotoAndPlay("muteOff");
	}
}
function clickedMuteButton(evt) {
	if(areAllSoundsMuted()) {
		this.gotoAndPlay("muteOff");
		unmuteAllSounds();
	}
	else {
		this.gotoAndPlay("muteOn");
		muteAllSounds();
	}
}