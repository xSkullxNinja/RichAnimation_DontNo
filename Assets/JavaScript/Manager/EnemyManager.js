var jamie = false;

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
    var locationX = [445];
    var locationY = [140];
    var redEnemy1 = new enemy("Red", 730, 140, locationX, locationY);
    redEnemy1.Init();
    this.enemyArray.push(redEnemy1);
    collisionChecker.addEnemyCollider(redEnemy1.img.sprite);
    
    locationX = [45];
    locationY = [140];
    var redEnemy2 = new enemy("Red", 330, 140, locationX, locationY);
    redEnemy2.Init();
    this.enemyArray.push(redEnemy2);
    collisionChecker.addEnemyCollider(redEnemy2.img.sprite);

    locationX = [730, 45, 45];
    locationY = [45, 45, 530];
    var redEnemy2 = new enemy("Red", 730, 530, locationX, locationY);
    redEnemy2.Init();
    this.enemyArray.push(redEnemy2);
    collisionChecker.addEnemyCollider(redEnemy2.img.sprite);
    
    //Blue Enemies
    locationX = [730];
    locationY = [140];
    var bluEnemy1 = new enemy("Blue", 445, 140, locationX, locationY);
    bluEnemy1.Init();
    this.enemyArray.push(bluEnemy1);
    collisionChecker.addEnemyCollider(bluEnemy1.img.sprite);
    
    locationX = [330];
    locationY = [140];
    var bluEnemy2 = new enemy("Blue", 45, 140, locationX, locationY);
    bluEnemy2.Init();
    this.enemyArray.push(bluEnemy2);
    collisionChecker.addEnemyCollider(bluEnemy2.img.sprite);

    locationX = [45, 730, 730];
    locationY = [45, 45, 530];
    var bluEnemy2 = new enemy("Blue", 45, 530, locationX, locationY);
    bluEnemy2.Init();
    this.enemyArray.push(bluEnemy2);
    collisionChecker.addEnemyCollider(bluEnemy2.img.sprite);
    
    //Purple Enemies
    locationX = [45, 387.5, 730];
    locationY = [530, 530, 530];
    var purpEnemy2 = new enemy("Purple", 387.5, 530, locationX, locationY);
    purpEnemy2.Init();
    this.enemyArray.push(purpEnemy2);
    collisionChecker.addEnemyCollider(purpEnemy2.img.sprite);
}

function loadLevel3(){
    //Red Enemies
    var locationX = [400, 400, 640];
    var locationY = [330, 230, 230];
    var redEnemy1 = new enemy("Red", 640, 330, locationX, locationY);
    redEnemy1.Init();
    this.enemyArray.push(redEnemy1);
    collisionChecker.addEnemyCollider(redEnemy1.img.sprite);
        
    //Blue Enemies
    locationX = [370, 370, 120];
    locationY = [230, 330, 330];
    var bluEnemy1 = new enemy("Blue", 120, 230, locationX, locationY);
    bluEnemy1.Init();
    this.enemyArray.push(bluEnemy1);
    collisionChecker.addEnemyCollider(bluEnemy1.img.sprite);
        
    //Purple Enemies
    //top enemy
    //y top is 40, y bottom is 140
    //x left is 40, x right is 730
    locationX = [040, 040, 730, 730];
    locationY = [140, 040, 040, 140];
    var purpEnemy1 = new enemy("Purple", 100, 140, locationX, locationY);
    purpEnemy1.Init();
    this.enemyArray.push(purpEnemy1);
    collisionChecker.addEnemyCollider(purpEnemy1.img.sprite);
    
    //bottom enemy
    //y top is 430, y bottom is 525
    //x left is 40, x right is 730
    locationX = [730, 730, 040, 040];
    locationY = [430, 525, 525, 430];
    var purpEnemy2 = new enemy("Purple", 600, 430, locationX, locationY);
    purpEnemy2.Init();
    this.enemyArray.push(purpEnemy2);
    collisionChecker.addEnemyCollider(purpEnemy2.img.sprite);
    
    //Mid enemy
    locationX = [375, 045, 375, 385, 730, 385];
    locationY = [335, 335, 335, 230, 230, 230];
    var purpEnemy3 = new enemy("Purple", 380, 280, locationX, locationY);
    purpEnemy3.Init();
    this.enemyArray.push(purpEnemy3);
    collisionChecker.addEnemyCollider(purpEnemy3.img.sprite);
}

//TODO: move this logic to the player instead of the manager
function update(){
    if(!jamie){
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
}