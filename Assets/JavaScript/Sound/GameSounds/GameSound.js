function GameSound(soundId) {
	Sound.call(this);
    this.maxVolume;
    this.sound;
    this.soundId = soundId;
}
GameSound.prototype = Object.create(Sound.prototype);
GameSound.prototype.constuctor = GameSound;

GameSound.prototype.init = setupSound;
GameSound.prototype.isMuted = isSoundMuted;
GameSound.prototype.mute = muteSound;
GameSound.prototype.unmute = unmuteSound;
GameSound.prototype.setVolume = setSoundVolume;
GameSound.prototype.play = playSound;

function setupSound(maxVolume) {
    this.maxVolume = maxVolume;
    var volumePercent = sound[0] !== undefined ? sound[0].sound.volume / sound[0].maxVolume : 1;
    var volume = this.maxVolume * volumePercent;
	var soundConfig = new createjs.PlayPropsConfig().set({loop: 0, volume: volume})
	this.sound = createjs.Sound.play(this.soundId, soundConfig);
    this.sound.stop();
    sound[sound.length] = this;
}
function isSoundMuted() {
    return this.sound.muted;
}
function muteSound() {
    this.sound.muted = true;
}
function unmuteSound() {
    this.sound.muted = false;
}
function setSoundVolume(volumePercent) {
	this.sound.volume = this.maxVolume * volumePercent;
}
function playSound() {
	this.sound.play();
}