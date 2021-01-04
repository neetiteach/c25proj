class Paper{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius/2-10,{restitution:0.5,friction:0.8,density:1.8});
        this.r=radius;
       
        this.image=loadImage("paper.png");
        //Matter.Body.setScale(this.body,{x,y});
        World.add(myworld,this.body);

    }
    display(){
      var pos=this.body.position;
      //push();
     //rotate(this.body.angle);
      //translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.r,this.r);
       //ellipseMode(RADIUS);
       //ellipse(0,0,this.r,this.r)
      
      pop();
    }
}