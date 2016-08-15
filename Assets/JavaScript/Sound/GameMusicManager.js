var music = [];
function isAllMusicMuted() {
    return music.length > 0 && music[0].isMuted();
}
function muteAllMusic() {
    for(var musicCount = 0; musicCount < music.length; ++musicCount) {
        music[musicCount].mute();
    }
}
function unmuteAllMusic() {
    for(var musicCount = 0; musicCount < music.length; ++musicCount) {
        music[musicCount].unmute();
    }
}
function setAllMusicVolume(volume) {
    for(var musicCount = 0; musicCount < music.length; ++musicCount) {
        music[musicCount].setVolume(volume);
    }
}
