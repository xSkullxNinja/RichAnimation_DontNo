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
    var locationX = [500, 500, 400];
    var locationY = [400, 500, 500];
    var redEnemy1 = new enemy("Red", 400, 400, locationX, locationY);
    redEnemy1.Init();
    this.enemyArray.push(redEnemy1);
    collisionChecker.addEnemyCollider(redEnemy1.img.sprite);
    
    locationX = [30, 30, 10];
    locationY = [20, 40, 40];
    var redEnemy2 = new enemy("Red", 10, 20, locationX, locationY);
    redEnemy2.Init();
    this.enemyArray.push(redEnemy2);
    collisionChecker.addEnemyCollider(redEnemy2.img.sprite);
    
    //Blue Enemies
    locationX = [300, 300, 100];
    locationY = [200, 400, 400];
    var bluEnemy1 = new enemy("Blue", 100, 200, locationX, locationY);
    bluEnemy1.Init();
    this.enemyArray.push(bluEnemy1);
    collisionChecker.addEnemyCollider(bluEnemy1.img.sprite);
    
    locationX = [30, 30, 10];
    locationY = [20, 40, 40];
    var bluEnemy2 = new enemy("Blue", 10, 20, locationX, locationY);
    bluEnemy2.Init();
    this.enemyArray.push(bluEnemy2);
    collisionChecker.addEnemyCollider(bluEnemy2.img.sprite);
    
    //Purple Enemies
    locationX = [30, 30, 10];
    locationY = [20, 40, 40];
    var purpEnemy2 = new enemy("Purple", 10, 20, locationX, locationY);
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