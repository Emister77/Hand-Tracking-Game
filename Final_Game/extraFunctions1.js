function game1Basics() {

fill(255,253,108);
ellipse(circleX, circleY, 65, 65);  
background(255, 253, 208);
  if (mouseIsPressed === true && mouseY > 75 && mouseY < 400) {
    if (frameCount % 60 == 0 && timerMovement > 0) {
  timerMovement--;
}
  if (mouseIsPressed === true) {
    if (mouseX > circleX + 30) {
   pointsMovement = pointsMovement - pointLoss;
     background(200, 0, 0);
 }
  else if (mouseX < circleX - 30) {
    pointsMovement = pointsMovement - pointLoss;
     background(200, 0, 0);
  }
  else if (mouseY > circleY + 30) {
    pointsMovement = pointsMovement - pointLoss;
     background(200, 0, 0);
  }
  else if (mouseY < circleY - 30) {
     background(200, 0, 0);
    pointsMovement = pointsMovement - pointLoss; }
  }
  
    circleX = circleX + xSpeed * xDirection;
    circleY = circleY + ySpeed * yDirection; }

  if (circleX > 372) {
    xDirection = -1; }
  else if (circleX < 10) {
    xDirection = 1; }
  if (circleY > 370) {
    yDirection = -1; }
  else if (circleY < 105) {
    yDirection = 1;
  
  }

  
fill (0, 204, 255); // color for bottom rectangle
rect(0, 400, 400, 100); // draw bottom rectangle

fill(0, 204, 255); // color for top rectangle
rect (0, 0, 400, 75); // draw top rectangle
  
textSize(20); // size for text "Points:"
fill(255, 255, 0); // color for text "Points:"
text ("Points:", 10, 420); // draw "Points:"
  
textSize(20); // size for text "Time:"
fill(255, 255, 0); // color for text "Time:"
text ("Time:", 10, 450); // draw "Time:"

textSize(25); // size for text "Follow the Ball!"
fill(255, 255, 0); // color for text "Follow the Ball!"
text ("Follow the Ball!", 10, 50); // draw "Follow the Ball!"
  
textSize(15); // size for text "Click & Hold Anywhere to Play"
fill (0, 204, 255); // color for text "Click & Hold Anywhere to Play"
text ("Click & Hold Anywhere to Play", 100, 100); // draw "Click & Hold Anywhere to Play"

fill(207, 159, 255); // color for ball
ellipse(circleX, circleY, 50, 50); // draw ball 
  
textSize(22);
fill(255,255,0);
text(timerMovement,70,450);
  
textSize(22);
fill(255,255,0);
text(round(pointsMovement),80,420);
} 

function setUpGame1lvl1() {
timerMovement = 3;
pointsMovement = 100;
ySpeed = 1;
xSpeed = 1;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250;
}

function setUpGame1lvl2() {
timerMovement = 5;
pointsMovement = 100;
ySpeed = 1.7;
xSpeed = 1.7;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250;
}

function setUpGame1lvl3() {
timerMovement = 7;
pointsMovement = 100;
ySpeed = 2.25;
xSpeed = 2.25;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250;
}

function win1() {
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("Success!", 100, 150);
toGame1Level2Button.show();
game1Level1RetryButton.show();
timerMovement = 3;
pointsMovement = 100;
ySpeed = 1;
xSpeed = 1;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250;
}

function lose1() {
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
game1Level1RetryButton.show();
timerMovement = 3;
pointsMovement = 100;
ySpeed = 1;
xSpeed = 1;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250;
}

function win2() {
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("Success!", 100, 150);
game1Level3RetryButton.show();
game1Level2RetryButton.show();
timerMovement = 5;
pointsMovement = 100;
ySpeed = 1.7;
xSpeed = 1.7;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250;  
}

function lose2() {
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
game1Level2RetryButton.show();
timerMovement = 5;
pointsMovement = 100;
ySpeed = 1.7;
xSpeed = 1.7;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250;  
}

function win3() {
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("You Beat", 100, 150);
text("the Game!",100, 200);
game1Level1RetryButton.hide();
game1Level2RetryButton.hide();
movementTrackingHomeButton.hide();
game1Lvl3Retry.show();
game1Lvl3Pass.show();
timerMovement = 7;
pointsMovement = 100;
ySpeed = 2.25;
xSpeed = 2.25;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250;  
}

function lose3() {
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
game1Level2RetryButton.hide();
game1Level1RetryButton.hide();
timerMovement = 7;
pointsMovement = 100;
ySpeed = 2.25;
xSpeed = 2.25;
yDirection = 1;
xDirection = 1;
circleX = 200;
circleY = 250; 
game1Lvl3Retry.show();
}