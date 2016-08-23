// Sprite Sheets
function loadSpriteBlock() {
	var blockSheet = new createjs.SpriteSheet({
        images: [queue.getResult("characterSprite")],
        frames: [[0,0,32,32,0,16,16],[32,0,32,32,0,16,16],[64,0,32,32,0,16,16],[96,0,32,32,0,16,16],[128,0,32,32,0,16,16]]
    });

	var blocks = new createjs.Sprite(blockSheet);
	return blocks;
}
function loadSpriteCharacter() {
    var walkSheet = new createjs.SpriteSheet({
        images: [queue.getResult("characterSprite")],
        frames: [[160,0,19,49,0,10.05,48.6],[179,0,34,44,0,17.05,43.6],[213,0,22,46,0,9.05,45.6],[235,0,17,49,0,8.05,48.6],
				 [0,49,25,49,0,10.05,48.6],[25,49,31,46,0,14.05,45.6],[56,49,33,44,0,16.05,43.6],[89,49,30,44,0,17.05,43.6],
				 [119,49,28,46,0,17.05,45.6],[147,49,19,49,0,10.05,48.6],[166,49,23,49,0,14.05,48.6],[189,49,31,46,0,16.05,45.6],
				 [220,49,34,44,0,17.05,43.6],[0,98,19,49,0,9.05,48.6],[19,98,34,44,0,17.05,43.6],[53,98,22,46,0,13.05,45.6],
				 [75,98,17,49,0,9.05,48.6],[92,98,25,49,0,15.05,48.6],[117,98,31,46,0,17.05,45.6],[148,98,33,44,0,17.05,43.6],
				 [181,98,30,44,0,13.05,43.6],[211,98,28,46,0,11.05,45.6],[0,147,19,49,0,9.05,48.6],[19,147,23,49,0,9.05,48.6],
				 [42,147,31,46,0,15.05,45.6],[73,147,34,44,0,17.05,43.6]],
        animations: {
            standRight: [0, 0, "standRight"],
            walkRight: [1, 12, "walkRight", .5],
            standLeft: [13, 13, "standLeft"],
            walkLeft: [14, 25, "walkLeft", .5]
        }     
    });
    
    var walk = new createjs.Sprite(walkSheet);
	return walk;
}
function loadSpriteStar() {
	var starSheet = new createjs.SpriteSheet({
        images: [queue.getResult("starSprite")],
        frames: [[0,0,25,25,0,0,0],[25,0,25,25,0,0,0],[0,25,25,25,0,0,0],[26,25,25,25,0,0,0]],
        animations: {
            starSpin: [0, 3, "starSpin", .4],
        }
    });

	var star = new createjs.Sprite(starSheet);
	return star;
}

function bluePlayerSprite() {
	var playerSheet = new createjs.SpriteSheet({
		images: [queue.getResult("bluePlayer")],
		frames: [[66,0,32,49], [0,0,32,52], [33,0,32,52]],
		animations: {
			stand: [0, 0, "stand"],
			walk: [1, 2, "walk", .07],
		}
	})
	var bluePlayer = new createjs.Sprite(playerSheet);
	return bluePlayer;
}

function redPlayerSprite() {
	var playerSheet = new createjs.SpriteSheet({
		images: [queue.getResult("redPlayer")],
		frames: [[66,0,32,49], [0,0,32,52], [33,0,32,52]],
		animations: {
			stand: [0, 0, "stand"],
			walk: [1, 2, "walk", .07],
		}
	})
	var redPlayer = new createjs.Sprite(playerSheet);
	return redPlayer;
}

// Sprite Single Images
function loadSpriteRedEnemy() {
    //Frames, x, y, width, height, 0, offsetX, offsetY
	var enemySheet = new createjs.SpriteSheet({
        images: [queue.getResult("redEnemySprite")],
        frames: [[0,0,25,25,0,0,0]]
    });

	var enemys = new createjs.Sprite(enemySheet);
	return enemys;
}

function loadSpriteBlueEnemy() {
	var enemySheet = new createjs.SpriteSheet({
        images: [queue.getResult("blueEnemySprite")],
        frames: [[0,0,25,25,0,0,0]]
    });

	var enemys = new createjs.Sprite(enemySheet);
	return enemys;
}

function loadSpritePurpleEnemy() {
	var enemySheet = new createjs.SpriteSheet({
        images: [queue.getResult("purpleEnemySprite")],
        frames: [[0,0,25,25,0,0,0]]
    });

	var enemys = new createjs.Sprite(enemySheet);
	return enemys;
}
function loadSpriteWall() {
	var wallSheet = new createjs.SpriteSheet({
        images: [queue.getResult("wallSprite")],
        frames: [[0,0,20,20,0,0,0]]
    });

	var wall = new createjs.Sprite(wallSheet);
	return wall;
}
