var boxes = [];
var sideBase = 20;
var heightIncrement = 10;
var shuffledBoxes;
var counter = 0;

function setup() {
  background(0);
  createCanvas(800,600);
  background(0);
  var numBoxes = width/sideBase;
  for(var i = 0; i < numBoxes; i++){
    var boxHeight = sideBase + (i * heightIncrement);
    boxes.push(new Box(sideBase, boxHeight));
  }

  boxes = shuffle(boxes); // Built in P5.JS function

  for(var i = 0; i < boxes.length; i++){
    boxes[i].x = i * sideBase;
    boxes[i].y = height - boxes[i].height;
    boxes[i].display();
  }
  frameRate(1);
}

function draw() {
  background(0);
  var record = 0;
  var currIndex = counter;
  for(var i = currIndex; i < boxes.length; i++){
    if(boxes[i].height > record){
      record = boxes[i].height;
    }
  }
  if(counter < boxes.length){
    counter++;
  }
}

function whiteOut(arr){
  fill(255,255,255);
  arr.forEach(el => {
    el.display();
}) }
