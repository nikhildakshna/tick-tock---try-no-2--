class clock{
constructor(){};

createClock(){
var secAngle = map(sec,0,60,0,360);
var minAngle = map(min,0,60,0,360);
var hourAngle = map(hour,0,24,0,360);
console.log(secAngle + ":" + minAngle + ":" + hourAngle);
var sechand = createSprite(400,200,10,200);
sechand.rotation = secAngle;
sechand.shapeColor = rgb(255,0,0);
var minhand = createSprite(400,200,10,100);
minhand.rotation = minAngle;
minhand.shapeColor = rgb(255,255,0);
var hourhand = createSprite(400,200,10,50);
hourhand.rotation = hourAngle;
hourhand.shapeColor = rgb(0,255,0); 

textSize(20);
fill(255);
text(hour + ":" + min + ":" + sec,400,375);

drawSprites();
noFill();

strokeWeight(10);
stroke(255,0,0);
arc(400,200,220,220,270,273-(360-secAngle));
stroke(255,255,0);
arc(400,200,250,250,270,273-(360-minAngle));
stroke(0,255,0);
arc(400,200,280,280,270,273-(360-hourAngle));   
}

}