var whole;
var frame;
var frame1;
var framebottombun;
var framebottomcornchicken;
var framebottomgo;
var frametopbun;
var frametopchicken;
var frametopcorn;
var frametopgo;
var letterbun;
var letterchicken;
var lettercorn;
var lettergo;
var lettertomato;
var check;

function preload(){
whole = loadImage('whole.svg');
frame = loadImage('frame.svg');
frame1 = loadImage('frame1.svg');
framebottombun = loadImage('framebottombun.svg');
framebottomcornchicken= loadImage('framebottomcornchicken.svg');
framebottomgo = loadImage('framebottomgo.svg');
frametopbun = loadImage('frametopbun.svg');
frametopchicken = loadImage('frametopchicken.svg');
frametopcorn = loadImage('frametopcorn.svg');
frametopgo = loadImage('frametopgo.svg');
letterbun = loadImage('letterbun.svg');
letterchicken = loadImage('letterchicken.svg');
lettercorn= loadImage('lettercorn.svg');
lettergo = loadImage('lettergo.svg');
lettertomato = loadImage('lettertomato.svg');
check = 0;

}

function setup(){
  createCanvas(800,930);
  background(255);
  
   fill(0);
  image(frame,0,0);
   textSize(15);
  text("Click the can to start!",320,280);
  
   textSize(25);
  text("THIS IS NOT A",305,130);
  textSize(90);
  text("CAN",290,220);

}

function start(){

}
function draw() {
  
  /*
   textSize(20);
 text("WHAT IS YOUR FAVORITE CAN? ",270,100);
  textSize(10);
  text("                             (PUSH THE KEYBUTTON FROM a~e)",270,120);
  textSize(15);
 text("A. CHICKEN SOUP ",270,150);
 text("B. CORN SOUP ",270,200);
 text("C. FISH CAN ",270,250);
 text("D. BUG CAN ",270,300);
 text("E. I DON'T KNOW ",270,350);
  
  */
}



function mousePressed(){

if(mouseX>0 && mouseX <250 &&mouseY>0 && mouseY<380){
  background(255);
   
  image(whole,0,0);

  textSize(20);
 text("WHAT IS YOUR FAVORITE CAN? ",270,100);
  textSize(10);
  text("                             (PUSH THE KEYBUTTON FROM a~e)",270,120);
  textSize(15);
 text("A. CHICKEN SOUP ",270,150);
 text("B. CORN SOUP ",270,200);
 text("C. FISH CAN ",270,250);
 text("D. BUG CAN ",270,300);
 text("E. I DON'T KNOW ",270,350);  }

}
function keyPressed(){


  /*
   if(keyCode===ENTER){
     background(255);
   
  image(whole,0,0);

  textSize(20);
 text("WHAT IS YOUR FAVORITE CAN? ",270,100);
  textSize(10);
  text("                             (PUSH THE KEYBUTTON FROM a~e)",270,120);
  textSize(15);
 text("A. CHICKEN SOUP ",270,150);
 text("B. CORN SOUP ",270,200);
 text("C. FISH CAN ",270,250);
 text("D. BUG CAN ",270,300);
 text("E. I DON'T KNOW ",270,350);
    }     
   */
  
  
  
  
  if(key=='A'){
 background(255);
 textSize(20);
 text("WHAT IS YOUR FAVORITE CAN? ",270,100);
  textSize(10);
  text("                             (PUSH THE KEYBUTTON FROM a~e)",270,120);
  textSize(15);
 text("A. CHICKEN SOUP ",270,150);
 text("B. CORN SOUP ",270,200);
 text("C. FISH CAN ",270,250);
 text("D. BUG CAN ",270,300);
 text("E. I DON'T KNOW ",270,350);
    image(frame,0,0);
    image(frametopchicken,0,0);
    image(framebottomcornchicken,0,0);
    image(letterchicken,0,0);
    push();
    fill(255,0,0);
     text("V",420,150);
     pop();
         
   
  }
  
    if(key=='B'){
    background(255);
    textSize(20);
 text("WHAT IS YOUR FAVORITE CAN? ",270,100);
  textSize(10);
  text("                             (PUSH THE KEYBUTTON FROM a~e)",270,120);
  textSize(15);
 text("A. CHICKEN SOUP ",270,150);
 text("B. CORN SOUP ",270,200);
 text("C. FISH CAN ",270,250);
 text("D. BUG CAN ",270,300);
 text("E. I DON'T KNOW ",270,350);
    image(frame,0,0);
    image(frametopcorn,0,0);
    image(framebottomcornchicken,0,0);   
    image(lettercorn,0,0);
      push();
    fill(255,0,0);
     text("V",405,200);
     pop();
         
   
  }
  
    if(key=='C'){
       background(255);
       textSize(20);
 text("WHAT IS YOUR FAVORITE CAN? ",270,100);
  textSize(10);
  text("                             (PUSH THE KEYBUTTON FROM a~e)",270,120);
  textSize(15);
 text("A. CHICKEN SOUP ",270,150);
 text("B. CORN SOUP ",270,200);
 text("C. FISH CAN ",270,250);
 text("D. BUG CAN ",270,300);
 text("E. I DON'T KNOW ",270,350);
    image(frame,0,0);
    image(frametopgo,0,0);
    image(framebottomgo,0,0);
    image(lettergo,0,0);
      push();
    fill(255,0,0);
     text("V",410,250);
     pop();
  }
  
    if(key=='D'){
       background(255);
       textSize(20);
 text("WHAT IS YOUR FAVORITE CAN? ",270,100);
  textSize(10);
  text("                             (PUSH THE KEYBUTTON FROM a~e)",270,120);
  textSize(15);
 text("A. CHICKEN SOUP ",270,150);
 text("B. CORN SOUP ",270,200);
 text("C. FISH CAN ",270,250);
 text("D. BUG CAN ",270,300);
 text("E. I DON'T KNOW ",270,350);
         push();
    image(frame,0,0);
    image(frametopbun,0,0);
    image(framebottombun,0,0); 
    image(letterbun,0,0);
    
    fill(255,0,0);
     text("V",420,300);
     pop();
   
  }
  
   if(key=='E'){

       background(255);
       textSize(20);
 text("WHAT IS YOUR FAVORITE CAN? ",270,100);
  textSize(10);
  text("                             (PUSH THE KEYBUTTON FROM a~e)",270,120);
  textSize(15);
 text("A. CHICKEN SOUP ",270,150);
 text("B. CORN SOUP ",270,200);
 text("C. FISH CAN ",270,250);
 text("D. BUG CAN ",270,300);
 text("E. I DON'T KNOW ",270,350);
    
    image(frame1,0,0);
    image(lettertomato,0,0);


      push();
    fill(255,0,0);
     text("--> basic is the best",410,350);
     pop();
   
  }

}
