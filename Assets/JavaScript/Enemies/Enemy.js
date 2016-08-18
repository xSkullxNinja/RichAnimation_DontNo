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
    this.img = new createjs.Shape();
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
    var col = "#90E";
    if(this.color === "Red"){
        col = "#F00";
    }
    else if(this.color === "Blue"){
        col = "#00F";
    }
    this.img.graphics.beginFill(col).drawCircle(0, 0, 40);
    this.img.x = this.startX;
    this.img.y = this.startY;
    //add to stage
    stage.addChild(this.img);
	//collisionChecker.addEnemyCollider(this.img);
}
function EnUpdate(){
    //Check if correct player is moving.
        //If so continue
        //Else return
    if(this.color === "Red" && RedMoving){
        console.log("Red Moving, x: " + this.img.x + " y: " + this.img.y);
    }else if(this.color === "Blue" && BlueMoving){
        console.log("Blue Moving, x: " + this.img.x + " y: " + this.img.y);
    }else if(this.color === "Purple"){
        console.log("Purple Moving, x: " + this.img.x + " y: " + this.img.y);
    }
    else{
        console.log("Don't MOVE");
        return;
    }
    
    //lerp to location[nextLoc], we have an x and y array
    this.img.x = enLerp(this.img.x, this.locationsX[this.nextLoc], this.speed);
    this.img.y = enLerp(this.img.y, this.locationsY[this.nextLoc], this.speed);
    
    //Check if there, likely check a small range
        //If so update nextLoc by one
        //If nextLoc is equal to locations.length, set to 0
    if(enArrive(this.img.x, this.locationsX[this.nextLoc]) && enArrive(this.img.y, this.locationsY[this.nextLoc])){
        this.nextLoc += 1;
        if(this.nextLoc === this.locationsX.length){
            this.nextLoc = 0;
        }
    }
}
