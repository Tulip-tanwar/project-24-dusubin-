class paper {
constructer(x,y,widht,height);
var option;
restitiution:0.9,
friction:0.3,
dencity:1.0
}
this.body=Bodies.rectangle(x,y,50,50);
this.width=width;
this.height=height;
Mater.body.setAngle(this.body.angle);
world.add(world.,this.body);

display(){
    var pos(this.body.position);
    var angle(this.body.angle);
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(center);
    strokeWeight(4);
stroke("RED");
fill(250);
rect(0,0,this.widht,this.height);
pop();
}