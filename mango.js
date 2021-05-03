class mango extends BaseClass{
    constructor(x,y,radius){
      super(x,y,radius);
      var options = {
        isStatic : true
    }
    this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("mango.png");
      
    }
    display(){
      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
      super.display();
    }
  }
  