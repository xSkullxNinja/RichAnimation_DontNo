function GameMusic() {
	Sound.call(this);
    this.maxVolume;
    this.music;
}
GameMusic.prototype = Object.create(Sound.prototype);
GameMusic.prototype.constuctor = GameMusic;

GameMusic.prototype.init = setupMusic;
GameMusic.prototype.isMuted = isMusicMuted;
GameMusic.prototype.mute = muteMusic;
GameMusic.prototype.unmute = unmuteMusic;
GameMusic.prototype.setVolume = setMusicVolume;
GameMusic.prototype.play = playMusic;

function setupMusic(musicId, maxVolume) {
    this.maxVolume = maxVolume;
    var volumePercent = music[0] !== undefined ? music[0].music.volume / music[0].maxVolume : 1;
    var volume = this.maxVolume * volumePercent;
	var musicConfig = new createjs.PlayPropsConfig().set({loop: -1, volume: volume})
	this.music = createjs.Sound.play(musicId, musicConfig);
    this.music.stop();
    music[music.length] = this;
}
function isMusicMuted() {
    return this.music.muted;
}
function muteMusic() {
    this.music.muted = true;
}
function unmuteMusic() {
    this.music.muted = false;
}
function setMusicVolume(volumePercent) {
	this.music.volume = this.maxVolume * volumePercent;
}
function playMusic() {
	this.music.play();
}
