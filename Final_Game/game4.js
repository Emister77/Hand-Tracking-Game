function drawGame4Lvl1() {
Background1();
game4Basics();
retryGame4Lvl1.hide();
proceedToGame4Lvl1.hide();
movementTrackingBackButton.hide();
movementTrackingHomeButton.show();
goToGame4Lvl2.hide();
 if (timerTracing <= 0 && pointsTracing >= 70) {
    gameState = 35;
  }
  else if (pointsTracing < 70) {
    gameState = 36;
  }
if (mouseIsPressed === true) {
    if (mouseX < 90 || mouseX > 310 || mouseY > 330 || mouseY < 110) {
      pointsTracing -= 0.1;
    }
    else if (mouseX > 110 && mouseX < 290 && mouseY < 310 && mouseY > 130) {
      pointsTracing -= 0.1;
    }
  }
}

function setUpGame4Lvl1() {
pointsTracing = 100;
timerTracing = 2;  
Background1();
}

function setUpGame4Lvl2() {
pointsTracing = 100;
timerTracing = 7;
}

function drawGame4Lvl2() {
goToGame4Lvl3.hide();
retryGame4Lvl2.hide(); 
Background2();
game4Basics();
retryGame4Lvl1.hide();
goToGame4Lvl2.hide(); 
 if (timerTracing <= 0 && pointsTracing >= 70) {
    gameState = 38;
  }
  else if (pointsTracing < 70) {
    gameState = 39;
  }
if (mouseIsPressed === true) {
    if (mouseX < 10 || mouseX > 385 || mouseY > 410 || mouseY < 90) {
      pointsTracing -= 0.15;
    }
    else if (mouseX > 30 && mouseX < 365 && mouseY < 390 && mouseY > 110) {
      pointsTracing -= 0.15;
    }
  }
}