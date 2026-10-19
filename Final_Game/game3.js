

function preload() {
  bgImage = loadImage('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'); // Load your background image
}

function setUpGame3Lvl1() {

  levels = [
  "Pass with flying colors!"
];
  resetLevel();
   startTime = millis();
  endTime = startTime + levelDuration;
  
}

function setUpGame3Lvl2() {
 levels = [
  "Once upon a life time...?",
  // Add more phrases as needed
];
  resetLevel();
   startTime = millis();
  endTime = startTime + levelDuration;
}

function setUpGame3Lvl3() {
 levels = [
  "An apple a day keeps the doctor away",
  // Add more phrases as needed
];
  resetLevel();
  startTime = millis();
  endTime = startTime + levelDuration;
}

function drawGame3Lvl1() {
goToGame3Lvl2.hide();
retryGame3Lvl1.hide();
movementTrackingHomeButton.show();
movementTrackingBackButton.hide();
proceedToGame3Lvl1.hide();
background(bgImage); // Display the background image

text(targetText, 80, height / 2 - 110);
text(inputText, 80, height / 2 + 60);
displayTimerAndAccuracy();
  
if (inputText.length === targetText.length && endTime > 0 && accuracy > 79) {
totalCharsTyped = 0;
totalCorrectChars = 0;
  gameState = 26;
 }
  else if (gameEnded == true) {
totalCharsTyped = 0;
totalCorrectChars = 0;
    gameState = 25;
  }     
  else if (inputText.length === targetText.length && accuracy < 80) {
totalCharsTyped = 0;
totalCorrectChars = 0;
  gameState = 25; 
  }
let currentTime = millis();
let timeRemaining = max(0, (endTime - currentTime) / 1000).toFixed(2);
 

  if (parseFloat(timeRemaining) <= 0 && !gameEnded) {
totalCharsTyped = 0;
totalCorrectChars = 0;
    gameState = 25;
  }
// text(targetText, 80, height / 2 - 110);
//   text(inputText, 80, height / 2 + 60);
//   displayTimerAndAccuracy();
}

function drawGame3Lvl2() {
goToGame3Lvl3.hide();
retryGame3Lvl2.hide();
goToGame3Lvl2.hide();
retryGame3Lvl1.hide();
movementTrackingHomeButton.show();
background(bgImage); // Display the background image

  text(targetText, 80, height / 2 - 110);
  text(inputText, 80, height / 2 + 60);
  displayTimerAndAccuracy();
if (inputText.length === targetText.length && endTime > 0 && accuracy > 79) {
totalCharsTyped = 0;
totalCorrectChars = 0;
    gameState = 28;
 }
  else if (gameEnded == true) {
totalCharsTyped = 0;
totalCorrectChars = 0;
    gameState = 29;
  }     
  else if (inputText.length === targetText.length && accuracy < 80) {
totalCharsTyped = 0;
totalCorrectChars = 0;
  gameState = 29; 
  }
 let currentTime = millis();
  let timeRemaining = max(0, (endTime - currentTime) / 1000).toFixed(2);
 

  if (parseFloat(timeRemaining) <= 0 && !gameEnded) {
totalCharsTyped = 0;
totalCorrectChars = 0;
    gameState = 29;
  }
}

function drawGame3Lvl3() {
retryGame3Lvl3.hide();
game1Lvl3Pass.hide();
goToGame3Lvl3.hide();
retryGame3Lvl2.hide();
movementTrackingHomeButton.show();
background(bgImage); // Display the background image

textSize(20);
text(targetText, 30, height / 2 - 110);
text(inputText, 30, height / 2 + 60);
displayTimerAndAccuracy();
  
if (inputText.length === targetText.length && endTime > 0 && accuracy > 79) {
totalCharsTyped = 0;
totalCorrectChars = 0;
    gameState = 31;
 }
  else if (gameEnded == true) {
totalCharsTyped = 0;
totalCorrectChars = 0;
    gameState = 32;
  }     
  else if (inputText.length === targetText.length && accuracy < 80) {
totalCharsTyped = 0;
totalCorrectChars = 0;
  gameState = 32; 
  }
let currentTime = millis();
let timeRemaining = max(0, (endTime - currentTime) / 1000).toFixed(2);
 

  if (parseFloat(timeRemaining) <= 0 && !gameEnded) {
totalCharsTyped = 0;
totalCorrectChars = 0;
    gameState = 32;
  }
// text(targetText, 80, height / 2 - 110);
//   text(inputText, 80, height / 2 + 60);
//   displayTimerAndAccuracy();
}




