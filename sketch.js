var tom,tomImg,tomHappy;
var jerry,jerryImg,jerryImg2,jerryHappy;
var back,backImg; 

function preload() {
    //load the images here
   tomImg = loadImage("images/cat1.png");
   jerryImg = loadImage("images/mouse1.png");
   backImg = loadImage("images/garden.png");
   jerryImg2 = loadImage("images/mouse3.png");
   jerryHappy = loadImage("images/mouse2.png");
   tomHappy = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(950,700);
    //create tom and jerry sprites here

    back = createSprite(470,350);
    back.addImage("b",backImg);
    //back.scale = 2;


    tom = createSprite(800,550);
    tom.addImage("t",tomImg);
    tom.scale = 0.2;

    jerry = createSprite(100,550);
    jerry.addImage("j",jerryImg);
    jerry.scale = 0.2;

  


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    if((tom.x-jerry.x) < ((tom.width + jerry.width)/2))
    {
        tom.addAnimation("tomHappy",tomHappy);
        //tom.changeAnimation("tomHappy",tomHappy);
        jerry.addAnimation("jerryHappy",jerryHappy);
        //jerry.changeAnimation("jerryHappy",jerryHappy);
    }

    drawSprites();
}


 function keyPressed(){

    
    //For moving and changing animation write code here

    if(keyCode===LEFT_ARROW)
    {
        jerry.addAnimation("mouseTeasing",jerryImg2);
        jerry.changeAnimation("mouseTeasing");
        jerry.frameDelay = 30;
    
    }

    if(keyCode===RIGHT_ARROW)
    {
        jerry.changeAnimation("j");
        jerry.velocityX = 2;
        jerry.frameDelay = 30;
    }

 }
