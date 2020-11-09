class Bob{

    constructor(x){
        var st= {isStatic: true}
        this.obj= Bodies.circle(x,300,20,st);
        World.add(world,this.obj);
    }

    display(){
        ellipseMode(RADIUS);

        fill("pink");
        circle(this.obj.position.x,this.obj.position.y,20);
    }
}