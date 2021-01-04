class Bbox{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true,density:2.0});
        this.width=width;
        this.height=height;
       
        World.add(myworld,this.body);


    }
    display(){
        var pos=this.body.position;
        //imageMode(CENTER);
        //image(this.image,pos.x,pos.y,this.width,this.height);
       rectMode(CENTER);
       fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}