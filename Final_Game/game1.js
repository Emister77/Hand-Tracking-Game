
function game1Lvl1() {
pointLoss = 0.1;
game1Basics();
  
if (timerMovement == 0 && pointsMovement >= 70) {
gameState = 6;
}
else if (timerMovement == 0 && pointsMovement < 70) {
gameState = 5;
}
else if (pointsMovement <= 0) {
gameState = 5;
 }
toGame1Level2Button.hide();
game1Level1RetryButton.hide();
movementTrackingBackButton.hide();
movementTrackingHomeButton.show();
proceedToMovementTrackingButton.hide();
textSize(20); 
fill(255, 255, 0); 
text ("Level 1", 10, 480); 
}


function game1Level2() {
pointLoss = 0.15;
game1Basics();
  
if (timerMovement == 0 && pointsMovement >= 70) {
gameState = 8;
}
else if (timerMovement == 0 && pointsMovement < 70) {
gameState = 9;
}
else if (pointsMovement <= 0) {
gameState = 9;
 }
toGame1Level2Button.hide();
game1Level1RetryButton.hide();
movementTrackingBackButton.hide();
movementTrackingHomeButton.show();
proceedToMovementTrackingButton.hide();  
game1Level2RetryButton.hide();
game1Level3RetryButton.hide();
textSize(20); 
fill(255, 255, 0); 
text ("Level 2", 10, 480); 
}


function game1Level3() {
pointLoss = 0.225; 
game1Basics();

if (timerMovement == 0 && pointsMovement >= 70) {
gameState = 11;
}
else if (timerMovement == 0 && pointsMovement < 70) {
gameState = 12;
}
else if (pointsMovement <= 0) {
gameState = 12;
}
  
toGame1Level2Button.hide();
game1Level1RetryButton.hide();
movementTrackingBackButton.hide();
movementTrackingHomeButton.show();
proceedToMovementTrackingButton.hide();  
game1Level2RetryButton.hide();
game1Level3RetryButton.hide();  
game1Lvl3Retry.hide();
game1Lvl3Pass.hide(); 
  
textSize(20); 
fill(255, 255, 0); 
text ("Level 3", 10, 480); 
}