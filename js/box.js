function Box(width, height){
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
}

Box.prototype.display = function(){
  rect(this.x, this.y, this.width, this.height);
}
