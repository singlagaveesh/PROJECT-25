class Box {
    constructor(x, y, width, height){
      var options = 
      {
        isStatic : true
      } 
      this.image = loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        image(this.image,910,210,180,180)
        rectMode(CENTER);
        stroke("white")
        fill("white")
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  }