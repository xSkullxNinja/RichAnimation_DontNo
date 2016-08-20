function getManifest() {
	return Manifest = [
		// Manager
		{ 
			src: "JavaScript/Manager/GameStage.js"
		},
		{ 
			src: "JavaScript/Manager/GameManager.js"
		},
		{ 
			src: "JavaScript/Manager/UpdateManager.js"
		},
		{
			src: "JavaScript/Manager/TimerManager.js"
		},
        //Enemies
        {
            src: "JavaScript/Manager/EnemyManager.js"  
        },
        {
            src: "JavaScript/Enemies/Enemy.js"  
        },
		// Sound
		{
			src: "JavaScript/Sound/Sound.js"
		},
		{
			src: "JavaScript/Sound/SoundManager.js"
		},
		{
			src: "JavaScript/Sound/GameMusicManager.js"
		},
		{
			src: "JavaScript/Sound/GameSoundManager.js"
		},
		{
			src: "JavaScript/Sound/GameSounds/GameMusic.js"
		},
		{
			src: "JavaScript/Sound/GameSounds/GameSound.js"
		},
		// Character
		{
			src: "JavaScript/Characters/Character.js"
		},
		{
			src: "JavaScript/Characters/Player.js"
		},
		// Controls
		{ 
			src: "JavaScript/Controls/Mouse.js"
		},
		{ 
			src: "JavaScript/Controls/Keyboard.js"
		},
		{ 
			src: "JavaScript/Controls/KeyCode.js"
		},
        // Collision
        { 
			src: "JavaScript/Collision/ndgmr.Collision.js"
		},
		{
			src: "JavaScript/Collision/CollisionChecker.js"
		},
		// Text
		{ 
			src: "JavaScript/Text/Text.js"
		},
		{ 
			src: "JavaScript/Text/GameText/MouseText.js"
		},
		{ 
			src: "JavaScript/Text/GameText/ScoreText.js"
		},
		{ 
			src: "JavaScript/Text/GameText/TweenText.js"
		},
		// Scenes
		{ 
			src: "JavaScript/Scenes/MainMenuScene.js"
		},
		{ 
			src: "JavaScript/Scenes/InstructionsScene.js"
		},
		{ 
			src: "JavaScript/Scenes/GamePlayScene.js"
		},
		{ 
			src: "JavaScript/Scenes/GameOverScene.js"
		},
		{ 
			src: "JavaScript/Scenes/LoadingLevelScene.js"
		},
		// StateMachine
		{ 
			src: "JavaScript/StateMachine/StateManager.js"
		},
		{ 
			src: "JavaScript/StateMachine/State.js"
		},
		{ 
			src: "JavaScript/StateMachine/GameStates/GameOverState.js"
		},
		{ 
			src: "JavaScript/StateMachine/GameStates/GamePlayState.js"
		},
		{ 
			src: "JavaScript/StateMachine/GameStates/MainMenuState.js"
		},
		{ 
			src: "JavaScript/StateMachine/GameStates/InstructionsState.js"
		},
		{ 
			src: "JavaScript/StateMachine/GameStates/LoadingLevelState.js"
		},
		// Sprites
		{
			src: "JavaScript/SpriteManager/SpriteCreator.js"
		},
		{
			src: "JavaScript/SpriteManager/SpriteData.js"
		},
		{
			src: "JavaScript/SpriteManager/Sprites/Sprite.js"
		},
		{
			src: "JavaScript/SpriteManager/Sprites/AnimatedSprite.js"
		},
		{
			src: "JavaScript/SpriteManager/Sprites/StaticSprite.js"
		},
		{
			src: "JavaScript/SpriteManager/Sprites/AnimatedSprites/StarSprite.js"
		},
		{
			src: "JavaScript/SpriteManager/Sprites/AnimatedSprites/WalkingSprite.js"
		},
		{
			src: "JavaScript/SpriteManager/Sprites/StaticSprites/BlockSprite.js"
		},
		{
			src: "JavaScript/SpriteManager/Sprites/StaticSprites/EnemySprite.js"
		},
		{
			src: "JavaScript/SpriteManager/Sprites/StaticSprites/WallSprite.js"
		},
		// Buttons
		{
			src: "JavaScript/Buttons/Button.js"
		},
		{
			src: "JavaScript/Buttons/ButtonCreator.js"
		},
		{
			src: "JavaScript/Buttons/ButtonsData.js"
		},
		{ 
			src: "JavaScript/Buttons/ScreenButtons/PlayButton.js"
		},
		{ 
			src: "JavaScript/Buttons/ScreenButtons/InstructionButton.js"
		},
		{ 
			src: "JavaScript/Buttons/ScreenButtons/MenuButton.js"
		},
		{ 
			src: "JavaScript/Buttons/ScreenButtons/ContinueButton.js"
		},
		{ 
			src: "JavaScript/Buttons/ScreenButtons/PlayAgainButton.js"
		},
		{ 
			src: "JavaScript/Buttons/ScreenButtons/MuteButton.js"
		},
		// Music
		{
			src: "Sounds/backgroundBreeze.mp3",
			id: "backgroundMusicBreeze"
		},
		{
			src: "Sounds/backgroundMemories.mp3",
			id: "backgroundMusicMemories"
		},
		// Images
		{ 
			src: "Images/SpriteSheets/buttons.png",
			id: "buttonSprites"
		},
		{ 
			src: "Images/SpriteSheets/sprites.png",
			id: "characterSprite"
		},
		{
			src: "Images/SpriteSheets/starSprite.png",
			id: "starSprite"
		},
		{ 
			src: "Images/RedEnemy.png",
			id: "redEnemySprite"
		},
		{ 
			src: "Images/BlueEnemy.png",
			id: "blueEnemySprite"
		},
		{ 
			src: "Images/PurpleEnemy.png",
			id: "purpleEnemySprite"
		},
		{
			src: "Images/Backgrounds/MainMenuBackground.jpg",
			id: "MainMenuBackground"
		},
		{
			src: "Images/Backgrounds/InstructionBackground.jpg",
			id: "InstructionBackground"
		},
		{
			src: "Images/Backgrounds/GamePlayBackground.jpg",
			id: "GamePlayBackground"
		},
		{
			src: "Images/Backgrounds/GameOverBackground.jpg",
			id: "GameOverBackground"
		},
		{
			src: "Images/Backgrounds/LevelLoad.jpg",
			id: "LevelLoad"
		},
		{
			src: "Images/Sprites/Wall.jpg",
			id: "wallSprite"
		},
		{
			src: "Images/Sprites/RedPlayer.jpg",
			id: "RedPlayer"
		},
		{
			src: "Images/Sprites/BluePlayer.jpg",
			id: "BluePlayer"
		}
	];
}