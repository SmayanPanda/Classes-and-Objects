class Ball{
    
    constructor(x,y,radius){
        var options={
            restitution:0.3 
        }
         this.object=Bodies.circle(x,y,radius,options)   
        World.add(world,this.object)
        
    }
    display(){
       ellipseMode(RADIUS)
       ellipse(this.object.position.x,this.object.position.y,this.radius,this.radius)
    }
}