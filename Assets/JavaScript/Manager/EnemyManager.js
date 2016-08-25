function EnemyManager(){
    this.enemyArray = [];
}

EnemyManager.prototype.loadLevel1 = loadLevel1;
EnemyManager.prototype.loadLevel2 = loadLevel2;
EnemyManager.prototype.loadLevel3 = loadLevel3;
EnemyManager.prototype.update = update;

function loadLevel1(){
    //Create an enemy
        //Params, color, startX, startY, locationsX, locationsY
    //Init enemy
    //Add to enemy Array
    
    //Red Enemies
    var locationX = [483.5, 483.5, 483.5];
    var locationY = [530, 120, 530];
    var redEnemy1 = new enemy("Red", 50, 530, locationX, locationY);
    redEnemy1.Init();
    this.enemyArray.push(redEnemy1);
    collisionChecker.addEnemyCollider(redEnemy1.img.sprite);
    
    locationX = [740, 740, 615];
    locationY = [175, 450, 450];
    var redEnemy2 = new enemy("Red", 615, 175, locationX, locationY);
    redEnemy2.Init();
    this.enemyArray.push(redEnemy2);
    collisionChecker.addEnemyCollider(redEnemy2.img.sprite);
    
    //Blue Enemies
    locationX = [292.5, 292.5, 292.5];
    locationY = [45, 450, 45];
    var bluEnemy1 = new enemy("Blue", 725, 45, locationX, locationY);
    bluEnemy1.Init();
    this.enemyArray.push(bluEnemy1);
    collisionChecker.addEnemyCollider(bluEnemy1.img.sprite);
    
    locationX = [45, 45, 160];
    locationY = [400, 125, 125];
    var bluEnemy2 = new enemy("Blue", 160, 400, locationX, locationY);
    bluEnemy2.Init();
    this.enemyArray.push(bluEnemy2);
    collisionChecker.addEnemyCollider(bluEnemy2.img.sprite);
    
    //Purple Enemies
    locationX = [292.5, 292.5, 483.5, 483.5, 292.5, 292.5, 483.5, 483.5];
    locationY = [287.5, 100, 100, 287.5, 287.5, 475, 475, 287.5];
    var purpEnemy2 = new enemy("Purple", 387.5, 287.5, locationX, locationY);
    purpEnemy2.Init();
    this.enemyArray.push(purpEnemy2);
    collisionChecker.addEnemyCollider(purpEnemy2.img.sprite);
    //Repeat for each enemy
}

function loadLevel2(){
    //Red Enemies
    var locationX = [450];
    var locationY = [100];
    var redEnemy1 = new enemy("Red", 750, 100, locationX, locationY);
    redEnemy1.Init();
    this.enemyArray.push(redEnemy1);
    collisionChecker.addEnemyCollider(redEnemy1.img.sprite);
    
    locationX = [45];
    locationY = [100];
    var redEnemy2 = new enemy("Red", 350, 100, locationX, locationY);
    redEnemy2.Init();
    this.enemyArray.push(redEnemy2);
    collisionChecker.addEnemyCollider(redEnemy2.img.sprite);

    locationX = [740, 740, 25];
    locationY = [540, 25, 25];
    var redEnemy2 = new enemy("Red", 25, 540, locationX, locationY);
    redEnemy2.Init();
    this.enemyArray.push(redEnemy2);
    collisionChecker.addEnemyCollider(redEnemy2.img.sprite);
    
    //Blue Enemies
    locationX = [750];
    locationY = [100];
    var bluEnemy1 = new enemy("Blue", 450, 100, locationX, locationY);
    bluEnemy1.Init();
    this.enemyArray.push(bluEnemy1);
    collisionChecker.addEnemyCollider(bluEnemy1.img.sprite);
    
    locationX = [350];
    locationY = [100];
    var bluEnemy2 = new enemy("Blue", 45, 100, locationX, locationY);
    bluEnemy2.Init();
    this.enemyArray.push(bluEnemy2);
    collisionChecker.addEnemyCollider(bluEnemy2.img.sprite);

    locationX = [25, 25, 740];
    locationY = [540, 25, 25];
    var bluEnemy2 = new enemy("Blue", 740, 540, locationX, locationY);
    bluEnemy2.Init();
    this.enemyArray.push(bluEnemy2);
    collisionChecker.addEnemyCollider(bluEnemy2.img.sprite);
    
    //Purple Enemies
    locationX = [50, 387.5, 725];
    locationY = [540, 540, 540];
    var purpEnemy2 = new enemy("Purple", 387.5, 540, locationX, locationY);
    purpEnemy2.Init();
    this.enemyArray.push(purpEnemy2);
    collisionChecker.addEnemyCollider(purpEnemy2.img.sprite);
}
function loadLevel3(){
    //Red Enemies
    var locationX = [483.5, 483.5, 483.5];
    var locationY = [530, 120, 530];
    var redEnemy1 = new enemy("Red", 50, 530, locationX, locationY);
    redEnemy1.Init();
    this.enemyArray.push(redEnemy1);
    collisionChecker.addEnemyCollider(redEnemy1.img.sprite);
    
    locationX = [740, 740, 615];
    locationY = [175, 450, 450];
    var redEnemy2 = new enemy("Red", 615, 175, locationX, locationY);
    redEnemy2.Init();
    this.enemyArray.push(redEnemy2);
    collisionChecker.addEnemyCollider(redEnemy2.img.sprite);
    
    //Blue Enemies
    locationX = [292.5, 292.5, 292.5];
    locationY = [45, 450, 45];
    var bluEnemy1 = new enemy("Red", 725, 45, locationX, locationY);
    bluEnemy1.Init();
    this.enemyArray.push(bluEnemy1);
    collisionChecker.addEnemyCollider(bluEnemy1.img.sprite);
    
    locationX = [45, 45, 160];
    locationY = [400, 125, 125];
    var bluEnemy2 = new enemy("Red", 160, 400, locationX, locationY);
    bluEnemy2.Init();
    this.enemyArray.push(bluEnemy2);
    collisionChecker.addEnemyCollider(bluEnemy2.img.sprite);
    
    //Purple Enemies
    locationX = [292.5, 292.5, 483.5, 483.5, 292.5, 292.5, 483.5, 483.5];
    locationY = [287.5, 100, 100, 287.5, 287.5, 475, 475, 287.5];
    var purpEnemy2 = new enemy("Purple", 387.5, 287.5, locationX, locationY);
    purpEnemy2.Init();
    this.enemyArray.push(purpEnemy2);
    collisionChecker.addEnemyCollider(purpEnemy2.img.sprite);
}

//TODO: move this logic to the player instead of the manager
function update(){
    for(i = 0; i < this.enemyArray.length; i++){
        var enemy = this.enemyArray[i];
        if(enemy.color == "Red"){
            if(((movingLeftPlayer1 || movingRightPlayer1) && !cancelPlayer1Horizontal) || ((movingUpPlayer1 || movingDownPlayer1) && !cancelPlayer1Vertical)){
                enemy.Update();
            }
        }
        else if(enemy.color == "Blue"){
            if(((movingLeftPlayer2 || movingRightPlayer2) && !cancelPlayer2Horizontal) || ((movingUpPlayer2 || movingDownPlayer2) && !cancelPlayer2Vertical)){
                enemy.Update();
            }
        }
        else if(enemy.color == "Purple"){
            if(((movingLeftPlayer1 || movingRightPlayer1) && !cancelPlayer1Horizontal) || ((movingUpPlayer1 || movingDownPlayer1) && !cancelPlayer1Vertical) || ((movingLeftPlayer2 || movingRightPlayer2) && !cancelPlayer2Horizontal) || ((movingUpPlayer2 || movingDownPlayer2) && !cancelPlayer2Vertical)){
                enemy.Update();
            }
        }        
    }
}