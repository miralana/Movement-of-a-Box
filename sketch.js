var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30)
  box.shapeColor="green"
}

function draw() 
{
  background("yellow");
  if(keyIsDown(RIGHT_ARROW))
  {
    box.position.x+=5
  }
drawSprites()
}




