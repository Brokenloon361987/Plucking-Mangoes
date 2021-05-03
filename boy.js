class Boy extends BaseClass{
    constructor(x,y,radius){
      super(x,y,radius);
      this.image = loadImage("boy.png");
      // this.scale = 10
      
    }
    display(){
      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
      super.display();
    }
  }
  