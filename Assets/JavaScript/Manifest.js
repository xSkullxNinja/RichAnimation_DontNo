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
        //Collision
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
			src: "JavaScript/Sprites/Sprite.js"
		},
		{
			src: "JavaScript/Sprites/SpriteCreator.js"
		},
		{
			src: "JavaScript/Sprites/SpriteData.js"
		},
		{
			src: "JavaScript/Sprites/CharacterSprite/WalkingSprite.js"
		},
		{
			src: "JavaScript/Sprites/CharacterSprite/BlockSprite.js"
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
			src: "Images/buttons.png",
			id: "buttonSprites"
		},
		{ 
			src: "Images/sprites.png",
			id: "characterSprite"
		},
		{
			src: "Images/MainMenuBackground.jpg",
			id: "MainMenuBackground"
		},
		{
			src: "Images/InstructionBackground.jpg",
			id: "InstructionBackground"
		},
		{
			src: "Images/GamePlayBackground.jpg",
			id: "GamePlayBackground"
		},
		{
			src: "Images/GameOverBackground.jpg",
			id: "GameOverBackground"
		},
		{
			src: "Images/LevelLoad.jpg",
			id: "LevelLoad"
		},
		{
			src: "Images/Wall.jpg",
			id: "Wall"
		}
	];
}