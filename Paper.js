class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            retitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    }
    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}