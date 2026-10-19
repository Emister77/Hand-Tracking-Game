function ballFollowInstructions() {

toGamesButton.hide();
wordTracingButton.hide();
jugglingButton.hide();
typingPracticeButton.hide();
movementTrackingButton.hide();
menu2BackButton.hide();
movementTrackingBackButton.show();
proceedToMovementTrackingButton.show();
game1Level2RetryButton.hide();
game1Lvl3Pass.hide();
game1Lvl3Retry.hide();
background(255, 253, 208);
  
textSize(25);
fill(0, 204, 255);
text("Instructions", 130, 75);
  
textSize(15);
fill(0, 204, 255);
text("Using either a finger, stylus, or cursor, you'll follow the path", 5, 140);
text("of a ball that will bounce around the screen. You will start", 5, 170);
text("with 100 points, but you'll lose points if you are not properly", 5, 200);
text("following the ball. Finish with atleast 70 points to move to", 5, 230);
text("the next level. The timer will count down how long the level", 5, 260);
text("will last", 5, 290);
}

function jugglingInstructions() {

toGamesButton.hide();
wordTracingButton.hide();
jugglingButton.hide();
typingPracticeButton.hide();
movementTrackingButton.hide();
menu2BackButton.hide();
movementTrackingBackButton.show();
proceedToMovementTrackingButton.hide();
game1Level2RetryButton.hide();
game1Lvl3Pass.hide();
game1Lvl3Retry.hide();
proceedToJugglingButton.show();
background(255, 253, 208);  

textSize(25);
fill(0, 204, 255);
text("Instructions", 130, 75);  
  
textSize(15);
fill(0, 204, 255);
text("Using a finger, stylus, or cursor, click on the falling objects", 5, 140);
text("to keep them in the air. If an object gets too low, it will", 5, 170);
text("reset at the top. After 5 fails, you will fail the level. Outlast", 5, 200); 
text("the timer to move on to the next level", 5, 230); 
}

function typingInstructions() {
toGamesButton.hide();
wordTracingButton.hide();
jugglingButton.hide();
typingPracticeButton.hide();
movementTrackingButton.hide();
menu2BackButton.hide();
movementTrackingBackButton.show();
proceedToMovementTrackingButton.hide();
game1Level2RetryButton.hide();
game1Lvl3Pass.hide();
game1Lvl3Retry.hide();
proceedToJugglingButton.hide();
proceedToGame3Lvl1.show();
background(255, 253, 208);  

textSize(25);
fill(0, 204, 255);
text("Instructions", 130, 75);  
  
textSize(15);
fill(0, 204, 255); 
text("Using either a physical or digital keyboard, type out the", 5, 140);
text("words shown on the screen. Your accuracy will be tracked", 5, 170);
text("at the top of the screen. A timer will be present in each", 5, 200);
text("level, if you fail to type out the whole sentence before the", 5, 230);
text("timer hits 0, or your accuracy is below 80%, you will have", 5, 260);
text("to retry the level", 5, 290);
  
}

function tracingInstructions() {
toGamesButton.hide();
wordTracingButton.hide();
jugglingButton.hide();
typingPracticeButton.hide();
movementTrackingButton.hide();
menu2BackButton.hide();
movementTrackingBackButton.show();
proceedToMovementTrackingButton.hide();
game1Level2RetryButton.hide();
game1Lvl3Pass.hide();
game1Lvl3Retry.hide();
proceedToJugglingButton.hide();
proceedToGame3Lvl1.hide();
proceedToGame4Lvl1.show();
background(255, 253, 208);  

textSize(25);
fill(0, 204, 255);
text("Instructions", 130, 75);  
  
textSize(15);
fill(0, 204, 255); 
text("Using either a stylus, finger, or cursor, trace the shape", 5, 140);
text("shown on the screen. You will lose points if you go off of", 5, 170);
text("the shapes outline, and you need atleast 70 points in order", 5, 200);
text("to move on to the next level", 5, 230); 
  
}