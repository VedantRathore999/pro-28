class Slingshot{
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB:B,
            stiffness:0.01,
            length: 5
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){

  this.sling.bodyA=null;


    }
    attach(bodyA){
    this.sling.bodyA=bodyA;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    
}






