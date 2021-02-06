var hour,min,sec;
var Clock;

function setup() {
  createCanvas(800,400);


Clock = new clock();
hour = hour();
min = minute();
sec = second();


}

function draw() {
  background(0);  
  drawSprites();
 
  
  Clock.createClock();


}

