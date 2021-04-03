class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/ground.png");
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, 600, 390, this.width, this.height);
    }
  };