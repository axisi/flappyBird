const particlesAray = [];

class Particle {
    constructor()   {
        this.x = bird.x;
        this.y = bird.y + bird.height/2;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = 'hsla('+hue+',50%, 50% , 0.8)';

    }
    update(){
        this.x -= gamespeed;
        this.y += this.speedY ;

    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y , this.size,0,2 * Math.PI )
        ctx.fill();
    }

}
function handleParticles(){
    particlesAray.unshift(new Particle());
    for (let i = 0; i < particlesAray.length; i++) {
        particlesAray[i].update();
        particlesAray[i].draw();



    }
    if (particlesAray.length > 60){
        for (let j = 0; j < 10; j++) {
            particlesAray.pop(particlesAray[j]);
        }
    }
}