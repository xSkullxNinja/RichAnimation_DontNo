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
    var locationX = [500, 500, 500];
    var locationY = [500, 120, 500];
    var redEnemy1 = new enemy("Red", 75, 500, locationX, locationY);
    redEnemy1.Init();
    this.enemyArray.push(redEnemy1);
    collisionChecker.addEnemyCollider(redEnemy1.img.sprite);
    
    locationX = [740, 740, 640];
    locationY = [200, 465, 465];
    var redEnemy2 = new enemy("Red", 640, 200, locationX, locationY);
    redEnemy2.Init();
    this.enemyArray.push(redEnemy2);
    collisionChecker.addEnemyCollider(redEnemy2.img.sprite);
    
    //Blue Enemies
    locationX = [300, 300, 300];
    locationY = [075, 500, 075];
    var bluEnemy1 = new enemy("Blue", 700, 075, locationX, locationY);
    bluEnemy1.Init();
    this.enemyArray.push(bluEnemy1);
    collisionChecker.addEnemyCollider(bluEnemy1.img.sprite);
    
    locationX = [050, 050, 150];
    locationY = [400, 110, 110];
    var bluEnemy2 = new enemy("Blue", 150, 400, locationX, locationY);
    bluEnemy2.Init();
    this.enemyArray.push(bluEnemy2);
    collisionChecker.addEnemyCollider(bluEnemy2.img.sprite);
    
    //Purple Enemies
    locationX = [300, 300, 500, 500, 300, 300, 500, 500];
    locationY = [300, 100, 100, 300, 300, 500, 500, 300];
    var purpEnemy2 = new enemy("Purple", 400, 300, locationX, locationY);
    purpEnemy2.Init();
    this.enemyArray.push(purpEnemy2);
    collisionChecker.addEnemyCollider(purpEnemy2.img.sprite);
    //Repeat for each enemy
}

//TODO: move this logic to the player instead of the manager
function update(){
    for(i = 0; i < this.enemyArray.length; i++){
        var enemy = this.enemyArray[i];
        if(enemy.color == "Red"){
            if(movingDownPlayer1 || movingLeftPlayer1 || movingRightPlayer1 || movingUpPlayer1){
                enemy.Update();
            }
        }
        else if(enemy.color == "Blue"){
            if(movingDownPlayer2 || movingLeftPlayer2 || movingRightPlayer2 || movingUpPlayer2){
                enemy.Update();
            }
        }
        else if(enemy.color == "Purple"){
            if(movingDownPlayer1 || movingLeftPlayer1 || movingRightPlayer1 || movingUpPlayer1 || movingDownPlayer2 || movingLeftPlayer2 || movingRightPlayer2 || movingUpPlayer2){
                enemy.Update();
            }
        }        
    }
}