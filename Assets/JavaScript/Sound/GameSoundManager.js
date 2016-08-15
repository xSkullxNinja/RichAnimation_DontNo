var sound = [];
function isAllSoundMuted() {
    return sound.length > 0 && sound[0].isMuted();
}
function muteAllSound() {
    for(var soundCount = 0; soundCount < sound.length; ++soundCount) {
        sound[soundCount].mute();
    }
}
function unmuteAllSound() {
    for(var soundCount = 0; soundCount < sound.length; ++soundCount) {
        sound[soundCount].unmute();
    }
}
function setAllSoundVolume(volume) {
    for(var soundCount = 0; soundCount < sound.length; ++soundCount) {
        sound[soundCount].setVolume(volume);
    }
}
