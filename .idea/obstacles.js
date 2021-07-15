const obstaclesArray = [];

class Obstacle {

    constructor() {
        this.top = Math.random() * canvas.height/3;
        this.bottom = Math.random() * (canvas.height -canvas.height/3);
        this.x = canvas.width;
        this.width = 20;

    }
    update(){
        this.x -= gamespeed;
        this.draw();
    }

    draw(){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, 0, this.width, this.top )
        ctx.fillRect(this.x, this.bottom, this.width, canvas.height)
    }

}

 function handleObstacles(){
    if(frame%50 === 0 ){
        obstaclesArray.unshift(new Obstacle());

    }
     for (let i = 0; i < obstaclesArray.length; i++) {
         obstaclesArray[i].update();
     }
     if(obstaclesArray.length>20){
         obstaclesArray.pop(obstaclesArray[0]);
     }

}
