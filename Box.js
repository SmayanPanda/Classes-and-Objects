class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:0.3
        }
        this.object= Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.object)
    }
    display(){
        rectMode(CENTER)
        rect(this.object.position.x,this.object.position.y,this.weight,this.height)
    }
}