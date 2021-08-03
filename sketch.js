var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dog = loadImage('dogImg.png');
  happyDog = laodImage('dogImg1.png');

}

function setup() {
	createCanvas(500, 500);

  dogSprite = createSprite(250, 250);
  dogSprite.addAnimation(dog)
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}

function readStock(data)
{
  foodS=data.val();
}

function writrStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function draw() {
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }  
  background(46, 139, 87);
  text("Note Press Up arrow key to feed the dog milk", 250, 90);
  textSize(16);
  fill("green");
  stroke(3);
  drawSprites();
  //add styles here

}



