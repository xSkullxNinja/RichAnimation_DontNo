function areAllSoundsMuted() {
    return isAllSoundMuted() || isAllMusicMuted();
}
function muteAllSounds() {
	muteAllMusic();
	muteAllSound();
}
function unmuteAllSounds() {
	unmuteAllMusic();
	unmuteAllSound();
}
function setAllSoundsVolume(volume) {
	setAllMusicVolume(volume);
	setAllSoundVolume(volume);
}
