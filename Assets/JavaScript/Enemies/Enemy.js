var RedMoving = true;
var BlueMoving = true;

function enemy(color, startX, startY, locationsX, locationsY){
    this.startX = startX;
    this.startY = startY;
    this.locationsX = locationsX;
    this.locationsX.push(startX);
    this.locationsY = locationsY;
    this.locationsY.push(startY);
    this.nextLoc = 0;
    this.speed = 10;
    this.color = color;
    this.img;
}

//Add functions to the enemies
enemy.prototype.Update = EnUpdate;
enemy.prototype.Init = EnemyInit;

//Functions the enemies use, but don't need attached as prototypes
function enLerp(enemy, startX, startY, nextX, nextY, speed){
    //TODO: Update speed or fix lerp. Probably moves way too fast
    var distanceX = nextX - startX;
    var distanceY = nextY - startY;
    var magnitude = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
    if(magnitude < speed){
        enemy.img.sprite.x = nextX;
        enemy.img.sprite.y = nextY;
    }
    else{
        var directionX = distanceX / magnitude;
        var directionY = distanceY / magnitude;
        enemy.img.sprite.x += speed * directionX;
        enemy.img.sprite.y += speed * directionY;
    }
}
function enArrive(current, dest){
    var errorRange = 2;
    if(current > (dest - errorRange) && current < (dest + errorRange)){
        return true;
    }
    else{
        return false;
    }
}

//Prototyped Functions
function EnemyInit(){
    //Create shape
    this.img = new EnemySprite(this.color);
    this.img.init(this.startX, this.startY);
    collisionChecker.addEnemyCollider(this.img.sprite);
}
function EnUpdate(){
    //Check if correct player is moving.
        //If so continue
        //Else return
    if(this.color === "Red" && RedMoving){
    }else if(this.color === "Blue" && BlueMoving){
    }else if(this.color === "Purple"){
    }
    else{
        return;
    }
    
    //lerp to location[nextLoc], we have an x and y array
    enLerp(this, this.img.sprite.x, this.img.sprite.y, this.locationsX[this.nextLoc], this.locationsY[this.nextLoc], this.speed);
    
    //Check if there, likely check a small range
        //If so update nextLoc by one
        //If nextLoc is equal to locations.length, set to 0
    if(enArrive(this.img.sprite.x, this.locationsX[this.nextLoc]) && enArrive(this.img.sprite.y, this.locationsY[this.nextLoc])){
        this.nextLoc += 1;
        if(this.nextLoc === this.locationsX.length){
            this.nextLoc = 0;
        }
    }
}
