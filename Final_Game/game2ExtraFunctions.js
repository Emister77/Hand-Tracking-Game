function game2Basics() { 
  
if (frameCount % 60 == 0 && timerJuggling > 0) {
  timerJuggling--;
}

if (mouseIsPressed === true) {
  if (mouseX < 125 && mouseX > 75 && mouseY < cY1 + 15 && mouseY > cY1 - 35) {
cY1 = 90;
}
  else if (mouseX > 180 && mouseX < 220 && mouseY < cY2 + 15 && mouseY > cY2 - 35) {
cY2 = 90; 
}
  else if (mouseX > 280 && mouseX < 320 && mouseY < cY3 + 15 && mouseY > cY3 - 35) {
cY3 = 90; 
}
  }

cY1 = cY1 + rate;
cY2 = cY2 + rate;
cY3 = cY3 + rate;  
background(255, 253, 208);

fill('black');
rect(0, 480, 400, 20);
  
fill('red');
textSize(16);
text('X'.repeat(38), 0, 480 + 14);
  
fill(0, 204, 255);
noStroke();
rect(-1, -1, 400, 70);
fill('black');
textSize(30);
text('Keep Out', 120, 60);
  
fill(199,0,0);
ellipse(100, cY1, 35, 35); 
ellipse(200, cY2, 35, 35);
ellipse(300, cY3, 35, 35);
  
fill(0,0,0);
textSize(15);
text("Score: " + pointsJuggling, 310, 60);
  
textSize(15);
text("Time: " + timerJuggling, 15, 60);
  
if (cY1 > 470) {
cY1 = 90;
pointsJuggling -= 20;
background(255,0,0);
  }
if (cY2 > 470) {
cY2 = 90;
pointsJuggling -= 20;
background(255,0,0);
  }
if (cY3 > 470) {
cY3 = 90;
pointsJuggling -= 20;
background(255,0,0);
  }
}

function winGame2Lvl1() {
rate = 0;
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("Success!", 100, 150);
retryGame2Lvl1.show();
goToGame2Lvl2.show();
}

function loseGame2Lvl1() {
rate = 0;
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
retryGame2Lvl1.show();
}

function setUpGame2Lvl1() {
rate = 1.25;
cY1 = 90;
cY2 = 90;
cY3 = 90;
pointsJuggling = 100;
timerJuggling = 12;
cY1 = cY1 + rate;
cY2 = cY2 + rate;
cY3 = cY3 + rate; 
}

function setUpGame2Lvl2() {
rate = 2;
cY1 = 90;
cY2 = 90;
cY3 = 90;
pointsJuggling = 100;
timerJuggling = 14;
cY1 = cY1 + rate;
cY2 = cY2 + rate;
cY3 = cY3 + rate;  
}

function loseGame2Lvl2() {
rate = 0;
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
retryGame2Lvl2.show();
}

function winGame2Lvl2() {
rate = 0;
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("Success!", 100, 150);
retryGame2Lvl2.show();
goToGame2Lvl3.show();
}

function loseGame2Lvl3() {
rate = 0;
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
retryGame2Lvl3.show();  
}

function winGame2Lvl3() {
rate = 0;
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("You Beat", 100, 150);
text("the Game!",100, 200);
goToGame2Lvl3.hide(); 
retryGame2Lvl3.show();
game1Lvl3Pass.show();
}

function setUpGame2Lvl3() {
rate = 3;
cY1 = 90;
cY2 = 90;
cY3 = 90;
pointsJuggling = 100;
timerJuggling = 16;
cY1 = cY1 + rate;
cY2 = cY2 + rate;
cY3 = cY3 + rate;  
}