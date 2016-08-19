var RedMoving = true;
var BlueMoving = false;

function enemy(color, startX, startY, locationsX, locationsY){
    this.startX = startX;
    this.startY = startY;
    this.locationsX = locationsX;
    this.locationsX.push(startX);
    this.locationsY = locationsY;
    this.locationsY.push(startY);
    this.nextLoc = 1;
    this.speed = 0.1;
    this.color = color;
    this.img;
}

//Add functions to the enemies
enemy.prototype.Update = EnUpdate;
enemy.prototype.Init = EnemyInit;

//Functions the enemies use, but don't need attached as prototypes
function enLerp(start, next, speed){
    //TODO: Update speed or fix lerp. Probably moves way too fast
    return start + speed * (next - start);
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
    var nextXpos = enLerp(this.img.sprite.x, this.locationsX[this.nextLoc], this.speed);
    var nextYpos = enLerp(this.img.sprite.y, this.locationsY[this.nextLoc], this.speed);
    this.img.move(nextXpos, nextYpos);
    
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
