class Stone extends BaseClass {
  constructor(x, y, height ){
    super (x, y, 25);
    this.image = loadImage("stone.png");
    //Matter.Body.setAngle(this.body);
    //this.stone1 = Constraint.create(options);
  }
display(){
  fill("blue")
  super.display();
}
}
