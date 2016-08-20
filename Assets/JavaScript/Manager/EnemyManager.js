function EnemyManager(){
    this.enemyArray = [];
}

EnemyManager.prototype.loadLevel1 = loadLevel1;
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
    locationY = [45, 455, 45];
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
function update(){
    for(i = 0; i < this.enemyArray.length; i++){
        this.enemyArray[i].Update();
    }
}