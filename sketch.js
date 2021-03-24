var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var cycleBell;
var pinkCG,yellowCG,redCG;
var pinkOpponent;
var yellowOpponent;
var redOpponent;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  pinkOpponent=loadAnimation("opponent1.png","opponent2.png");
  yellowOpponent=loadAnimation("opponent4.png","opponent5.png");
  redOpponent=loadAnimation("opponent7.png","opponent8.png");
  cycleBell=loadSound("sound/bell.mp3");
  
  
}

function setup(){
  
createCanvas(1200,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -(6+2*distance/150)

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  
  pinkCG=createGroup();
  redCG=createGroup();
  yellowCG=createGroup();
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  } 
 }
  //pinkCyclists();
  //redCyclists();
  distance=distance+Math.round(getFrameRate()/50);
  var select_oppPlayer = Math.round(random(1,3));
  
  if(frameCount%150 == 0){
    if(select_oppPlayer == 1){
      pinkCyclists();
    }else{
      redCyclists();
    }
      yellowCyclists();
  }
  if(keyDown("space")){
    cycleBell.play();
  }
}

function pinkCyclists(){
  player1 = createSprite(1100,Math.round(random(50,250),10,10));
  player1.scale=0.06;
  player1.addAnimation("pinkOpponent",pinkOpponent);
  player1.setLifetime=170;
  player1.velocityX=-(6 + 2*distance/150);
  pinkCG.add(player1);
}
function redCyclists(){
  player2 = createSprite(900,Math.round(random(50,250),10,10));
  player2.scale=0.06;
  player2.addAnimation("redOpponent",redOpponent);
  player2.setLifetime=170;
  player2.velocityX=-(6+2*distance/150);
  redCG.add(player2);
}
function yellowCyclists(){
  player3 = createSprite(800,Math.round(random(50,250),10,10));
  player3.scale=0.06;
  player3.addAnimation("yellowOpponent",yellowOpponent);
  player3.setLifetime=170;
  player3.velocityX=-(6+2*distance/150);
}