function Sound(soundId) {

}
Sound.prototype.init = setupDefaultSound;
Sound.prototype.isMuted = isMutedDefaultSound;
Sound.prototype.mute = muteDefaultSound;
Sound.prototype.unmute = unmuteDefaultSound;
Sound.prototype.setVolume = setDefaultSound;
Sound.prototype.play = playDefaultSound;

function setupDefaultSound(maxVolume) {
	console.log("Default Sound");
}
function isMutedDefaultSound() {
	console.log("Is Default Sound Mute");
}
function muteDefaultSound() {
	console.log("Default Sound Mute");
}
function unmuteDefaultSound() {
	console.log("Default Sound Unmute");
}
function setDefaultSound(volume) {
	console.log("Default Sound Volume");
}
function playDefaultSound() {
	console.log("Default Sound Play");
}
