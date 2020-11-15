class paper{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.y=y;
        this.x=x;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body)
    }
    display(){
        var paperPos=this.body.position;

        push()
        translate(paperPos.x,paperPos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this,r);
        pop()
    }
    function keyPressed(){
        if (keyCode === UP_ARROW){
            Matter.Body.applyForce(paperObject.body,paperObject.body.position,(x:85,y:-85));
        }
    }
}