function Mover(){
    this.position = createVector(random(width), random(height))  
    this.velocity = createVector(0, 0)   
    var accInit = random(1);
    this.acc = createVector(accInit, accInit)  
    this.r = random(256)
    this.g = random(256)
    this.b = random(256)
  }
  Mover.prototype.update = function(){
    this.velocity.add(this.acc)
    this.position.add(this.velocity)
  }
  Mover.prototype.display = function(){
    fill(this.r, this.g, this.b, 255)
    noStroke()
    ellipse(this.position.x, this.position.y, this.velocity.x*3, this.velocity.x*3)
  }
  Mover.prototype.checkEdge = function(){
    if(this.position.x > width/2){
      //this.velocity.x = this.velocity.x * -1;
      this.acc.x = Math.abs(this.acc.x)*-1;
    } 
    if(this.position.x < width/2){
      this.acc.x = Math.abs(this.acc.x);
    } 
    if(this.position.y > height/2){ 
      this.acc.y = Math.abs(this.acc.y)*-1;
    } 
    if(this.position.y < height/2){ 
      this.acc.y = Math.abs(this.acc.y);
    } 
  }
  
  
  function setup(){
    createCanvas(windowWidth, windowHeight);
    list = [];  
    for(var i=0; i<50; i++){
      list.push(new Mover())  
    }
  }

  
  function draw(){
    background('#f6abb6')
    for(var i=0; i<list.length; i++){
      m = list[i];
        m.update();
      m.checkEdge();
      m.display()
    }
  }