class twig {
    constructor(Body_1 , Point_2){
        var option = {
           bodyA: Body_1,
           pointB: Point_2,
   
           length : 1,
           stiffness: 0.004,
        }
        this.twig = Constraint.create(option);
        World.add(world, this.twig)
    }
   
    fly(){
      this.twig.bodyA = null;
    }
   
      display(){
         if(this.twig.bodyA){
            var pointA = this.twig.bodyA.position;
            var pointB = this.twig.pointB;
            strokeWeight(5);
            line (pointA.x, pointA.y, pointB.x, pointB.y);
       }
      }
      attach(body){
         this.twig.bodyA = body
         
      }
   } 
   