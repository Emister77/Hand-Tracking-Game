

function preload() {
  bgImage = loadImage('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'); // Load your background image
}

function game3Lvl1Win() {
retryGame3Lvl1.show();
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("Success!", 100, 150);
goToGame3Lvl2.show();
}

function game3Lvl1Lose() {
retryGame3Lvl1.show();
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
}

function game3Lvl2Win() {
goToGame3Lvl3.show();
retryGame3Lvl2.show();
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("Success!", 100, 150);
}

function game3Lvl2Lose() {
retryGame3Lvl2.show();
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
}

function game3Lvl3Win() {
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("You Beat", 100, 150);
text("the Game!",100, 200);
retryGame3Lvl3.show();
game1Lvl3Pass.show();
}

function game3Lvl3Lose() {
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
retryGame3Lvl3.show();
}

function keyTyped() {
  if (!gameEnded && key !== 'Enter') {
    inputText += key;
    updateAccuracy();
    checkPhraseCompletion();
  }
}

function displayText(txt, yPos) {
  fill(255);
  text(txt, width / 2, yPos);
}

function displayInputText(userInput, yPos) {
  fill(255);
  text(userInput, width / 2, yPos + 45);
}

function displayTimerAndAccuracy() {
  let currentTime = millis();
  let timeRemaining = max(0, (endTime - currentTime) / 1000).toFixed(2);
 

//   if (parseFloat(timeRemaining) <= 0 && !gameEnded) {
//     gameState = 25;
//   }
  
  textSize(25);
  fill(255); // White color for text to make it visible on the background
  text(`Time: ${timeRemaining}s`, 20, 30);
  text(`Accuracy: ${accuracy.toFixed(2)}%`, 20, 55);
  textSize(24);
}

function resetLevel() {
  targetText = levels[currentLevel];
  inputText = '';
  lastMistakeIndex = -1;
}

function updateAccuracy() {
  if (inputText.length <= targetText.length) {
    totalCharsTyped++;
    if (inputText[inputText.length - 1] === targetText[inputText.length - 1]) {
      if (lastMistakeIndex < inputText.length - 1) {
        totalCorrectChars++;
      }
    } else {
      lastMistakeIndex = inputText.length - 1;
    }
    accuracy = (totalCorrectChars / totalCharsTyped) * 100;
  }
}



function checkPhraseCompletion() {
   let currentTime = millis();
   let timeRemaining = max(0, (endTime - currentTime) / 1000).toFixed(2);
//  if (inputText.length === targetText.length && endTime > 0 && accuracy > 79) {
//     gameState = 26;
//  }
//   else if (gameEnded == true) {
//     gameState = 25;
//   }     
//   else if (inputText.length === targetText.length && accuracy < 80) {
  // gameState = 25; 
  // }
 }

// function resetTimer() {
//   startTime = millis();
//   endTime = startTime + levelDuration;
// }

function displayEndMessage(message) {
  fill('Red');
  text("End", width / 2, height - 60);
}