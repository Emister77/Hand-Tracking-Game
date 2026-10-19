let timerMovement;
let pointsMovement;
let ySpeed;
let xSpeed;
let yDirection;
let xDirection;
let circleX;
let circleY;
let circle;
let gameState = 1;
let pointsLoss;
let pointsJuggling;
let timerJuggling;
let rate;
let bgImage; // Variable for the background image
let currentLevel = 0;
let targetText, inputText;
let gameStarted = false, gameEnded = false;
let totalCharsTyped = 0, totalCorrectChars = 0;
let accuracy = 0;
let startTime, endTime;
const levelDuration = 15000; 
let won = false;
let lastMistakeIndex = -1; // To keep track of the last mistake index
let drawnLines = [];
let locked = false;
let timerTracing;
let pointsTracing;


function setup() {
createCanvas(400, 500);
frameRate(60);
   
toGamesButton = createButton('To games');
toGamesButton.position(95, 300);
toGamesButton.size(150, 50);
toGamesButton.style("font-size", "24px");
toGamesButton.hide();
  
wordTracingButton = createButton('Shape Tracing');
wordTracingButton.position(95, 180);
wordTracingButton.size(150, 40);
wordTracingButton.style("font-size", "20px");
wordTracingButton.hide();
  
jugglingButton = createButton('Juggling');
jugglingButton.position(95, 235);
jugglingButton.size(150, 40);
jugglingButton.style("font-size", "22px");
jugglingButton.hide();
  
typingPracticeButton = createButton('Typing Practice');
typingPracticeButton.position(95, 285);
typingPracticeButton.size(150, 40);
typingPracticeButton.style("font-size", "19px");
typingPracticeButton.hide();
  
movementTrackingButton = createButton('Movement Tracking');
movementTrackingButton.position(95, 335);
movementTrackingButton.size(150, 40);
movementTrackingButton.style("font-size", "16px");
movementTrackingButton.hide();
  
menu2BackButton = createButton('Back'); 
menu2BackButton.position(10, 470); 
menu2BackButton.hide();
  
movementTrackingBackButton = createButton('Back');
movementTrackingBackButton.position(10,470);
movementTrackingBackButton.hide();
  
proceedToMovementTrackingButton = createButton('Proceed to Level 1'); 
proceedToMovementTrackingButton.position(260, 470);
proceedToMovementTrackingButton.hide();
  
movementTrackingHomeButton = createButton('Home'); 
movementTrackingHomeButton.position(340, 30); 
  
toGame1Level2Button = createButton('To Level 2');
toGame1Level2Button.position(245,410);
toGame1Level2Button.size(85,50);
toGame1Level2Button.style("font-size", "16px");
toGame1Level2Button.hide();
  
game1Level1RetryButton = createButton('Retry');
game1Level1RetryButton.position(70,410);
game1Level1RetryButton.size(85, 50);
game1Level1RetryButton.style("font-size", "16px");
game1Level1RetryButton.hide();
  
game1Level2RetryButton = createButton('Retry');
game1Level2RetryButton.position(70,410);
game1Level2RetryButton.size(85, 50);
game1Level2RetryButton.style("font-size", "16px");
game1Level2RetryButton.hide();


game1Level3RetryButton = createButton('To Last Level');
game1Level3RetryButton.position(245,410);
game1Level3RetryButton.size(85, 50);
game1Level3RetryButton.style("font-size", "16px");
game1Level3RetryButton.hide();
  
game1Lvl3Retry = createButton('Retry');
game1Lvl3Retry.position(70,410);
game1Lvl3Retry.size(85, 50);
game1Lvl3Retry.style("font-size", "16px");
game1Lvl3Retry.hide();
  
game1Lvl3Pass = createButton('Return Home');
game1Lvl3Pass.position(245,410);
game1Lvl3Pass.size(85, 50);
game1Lvl3Pass.style("font-size", "16px");
game1Lvl3Pass.hide();
  
proceedToJugglingButton = createButton('Proceed to Level 1');
proceedToJugglingButton.position(260, 470);
proceedToJugglingButton.hide();
  
retryGame2Lvl1 = createButton('Retry');
retryGame2Lvl1.position(70,410);
retryGame2Lvl1.size(85, 50);
retryGame2Lvl1.style("font-size", "16px");
retryGame2Lvl1.hide();
  
goToGame2Lvl2 = createButton('To Level 2');
goToGame2Lvl2.position(245,410);
goToGame2Lvl2.size(85,50);
goToGame2Lvl2.style("font-size", "16px");
goToGame2Lvl2.hide();
  
retryGame2Lvl2 = createButton('Retry');
retryGame2Lvl2.position(70,410);
retryGame2Lvl2.size(85, 50);
retryGame2Lvl2.style("font-size", "16px");
retryGame2Lvl2.hide();
  
goToGame2Lvl3 = createButton('To Last Level');
goToGame2Lvl3.position(245,410);
goToGame2Lvl3.size(85,50);
goToGame2Lvl3.style("font-size", "16px");
goToGame2Lvl3.hide();
  
retryGame2Lvl3 = createButton('Retry');
retryGame2Lvl3.position(70,410);
retryGame2Lvl3.size(85, 50);
retryGame2Lvl3.style("font-size", "16px");
retryGame2Lvl3.hide();


proceedToGame3Lvl1 = createButton('Proceed To Level 1');
proceedToGame3Lvl1.position(260, 470);
proceedToGame3Lvl1.hide();
  
retryGame3Lvl1 = createButton('Retry');
retryGame3Lvl1.position(70,410);
retryGame3Lvl1.size(85, 50);
retryGame3Lvl1.style("font-size", "16px");
retryGame3Lvl1.hide();
  
goToGame3Lvl2 = createButton('To Level 2');
goToGame3Lvl2.position(245,410);
goToGame3Lvl2.size(85,50);
goToGame3Lvl2.style("font-size", "16px");
goToGame3Lvl2.hide();
  
retryGame3Lvl2 = createButton('Retry');
retryGame3Lvl2.position(70,410);
retryGame3Lvl2.size(85, 50);
retryGame3Lvl2.style("font-size", "16px");
retryGame3Lvl2.hide();
  
goToGame3Lvl3 = createButton('To Last Level');
goToGame3Lvl3.position(245,410);
goToGame3Lvl3.size(85,50);
goToGame3Lvl3.style("font-size", "16px");
goToGame3Lvl3.hide();
  
retryGame3Lvl3 = createButton('Retry');
retryGame3Lvl3.position(70,410);
retryGame3Lvl3.size(85, 50);
retryGame3Lvl3.style("font-size", "16px");
retryGame3Lvl3.hide();
  
proceedToGame4Lvl1 = createButton('Proceed To Level 1');
proceedToGame4Lvl1.position(260, 470);
proceedToGame4Lvl1.hide();
  
retryGame4Lvl1 = createButton('Retry');
retryGame4Lvl1.position(70,410);
retryGame4Lvl1.size(85, 50);
retryGame4Lvl1.style("font-size", "16px");
retryGame4Lvl1.hide();  
  
goToGame4Lvl2 = createButton('To Level 2');
goToGame4Lvl2.position(245,410);
goToGame4Lvl2.size(85,50);
goToGame4Lvl2.style("font-size", "16px");
goToGame4Lvl2.hide();
  
retryGame4Lvl2 = createButton('Retry');
retryGame4Lvl2.position(70,410);
retryGame4Lvl2.size(85, 50);
retryGame4Lvl2.style("font-size", "16px");
retryGame4Lvl2.hide();   
  
goToGame4Lvl3 = createButton('To Last Level');
goToGame4Lvl3.position(245,410);
goToGame4Lvl3.size(85,50);
goToGame4Lvl3.style("font-size", "16px");
goToGame4Lvl3.hide();
}
function draw() {
 
  
  if (gameState==1) {
    menu1();
  }
  else if (gameState==2) {
    menu2();
  }
  else if (gameState ==3) {
    ballFollowInstructions();
  }
  else if (gameState == 4) {
    game1Lvl1();
  }
  else if (gameState == 5) {
    lose1();
  }
  else if (gameState == 6) {
    win1();
  }
  else if (gameState == 7) {
    game1Level2();
  }
  else if (gameState == 8) {
    win2();
  }
  else if (gameState == 9) {
    lose2();
  }
  else if (gameState == 10) {
    game1Level3();
  }
  else if (gameState == 11) {
    win3();
  }
  else if (gameState == 12) {
    lose3();
  }
  else if (gameState == 13) {
    jugglingInstructions();
  }
  else if (gameState == 14) {
    drawGame2();
  }
  else if (gameState == 15) {
    winGame2Lvl1();
  }
  else if (gameState == 16) {
    loseGame2Lvl1();
  }
  else if (gameState == 17) {
    drawGame2Lvl2();
  }
  else if (gameState == 18) {
    winGame2Lvl2();
  }
  else if (gameState == 19) {
    loseGame2Lvl2();
  }
  else if (gameState == 20) {
    drawGame2Lvl3();
  }
  else if (gameState == 21) {
    winGame2Lvl3();
  }
  else if (gameState == 22) {
    loseGame2Lvl3();
  }
  else if (gameState == 23) {
    typingInstructions();
  }
  else if (gameState == 24) {
    drawGame3Lvl1();
  }
  else if (gameState == 25) {
    game3Lvl1Lose();
  }
  else if (gameState == 26) {
    game3Lvl1Win();
  }
  else if (gameState == 27) {
    drawGame3Lvl2();
  }
  else if (gameState == 28) {
    game3Lvl2Win();
  }
  else if (gameState == 29) {
    game3Lvl2Lose();
  }
  else if (gameState == 30) {
    drawGame3Lvl3();
  }
  else if (gameState == 31) {
    game3Lvl3Win();
  }
  else if (gameState == 32) {
    game3Lvl3Lose();
  }
  else if (gameState == 33) {
    tracingInstructions();
  }
  else if (gameState == 34) {
    drawGame4Lvl1();
  }
  else if (gameState == 35) {
    game4Lvl1Win();
  }
  else if (gameState == 36) {
    game4Lvl1Lose();
  }
  else if (gameState == 37) {
    drawGame4Lvl2();
  }
  else if (gameState == 38) {
    game4Lvl2Win();
  }
  else if (gameState == 39) {
    game4Lvl2Lose();
  }
  
 toGamesButton.mousePressed(() => {
   gameState = 2;
});
  menu2BackButton.mousePressed(() => {
    gameState = 1;
});
   wordTracingButton.mousePressed(() => {
   gameState = 33;
});
   jugglingButton.mousePressed(() => {
   gameState = 13;
});
   typingPracticeButton.mousePressed(() => {
   gameState = 23;
});
   movementTrackingButton.mousePressed(() => {
   gameState = 3;
});
  movementTrackingBackButton.mousePressed(() => {
    gameState = 2;
});
  proceedToMovementTrackingButton.mousePressed(() => {
    setUpGame1lvl1();
    gameState = 4;
});
  movementTrackingHomeButton.mousePressed(() => {
    gameState = 2;
    menu2();
});
  toGame1Level2Button.mousePressed(() => {
    setUpGame1lvl2();
    gameState = 7;  
});
  game1Level1RetryButton.mousePressed(() => {
    gameState = 4;
});
  game1Level2RetryButton.mousePressed(() => {
    setUpGame1lvl2();
    gameState = 7;
});
  game1Level3RetryButton.mousePressed(() => {
    setUpGame1lvl3();
    gameState = 10;
  });
  game1Lvl3Retry.mousePressed(() => {
    setUpGame1lvl3();
    gameState = 10;
  });
  game1Lvl3Pass.mousePressed(() => {
    gameState = 2;
  });
  proceedToJugglingButton.mousePressed(() => {
    setUpGame2Lvl1();
    gameState = 14;
  });
  retryGame2Lvl1.mousePressed(() => {
    setUpGame2Lvl1();
    gameState = 14;
  });
  goToGame2Lvl2.mousePressed(() => {
    setUpGame2Lvl2();
    gameState = 17;
  });
  retryGame2Lvl2.mousePressed(() => {
    setUpGame2Lvl2();
    gameState = 17;
  });
  goToGame2Lvl3.mousePressed(() => {
    setUpGame2Lvl3();
    gameState = 20;
  });
  retryGame2Lvl3.mousePressed(() => {
    setUpGame2Lvl3();
    gameState = 20;
  });
  proceedToGame3Lvl1.mousePressed(() => {
    setUpGame3Lvl1();
    accuracy = 0;
    gameState = 24;
  })
  retryGame3Lvl1.mousePressed(() => {
    setUpGame3Lvl1();
    accuracy = 0;
    gameState = 24;
  });
  goToGame3Lvl2.mousePressed(() => {
    setUpGame3Lvl2();
    accuracy = 0;
    gameState = 27;
  });
  retryGame3Lvl2.mousePressed(() => {
    setUpGame3Lvl2();
    accuracy = 0;
    gameState = 27;
  });
  goToGame3Lvl3.mousePressed(() => {
   setUpGame3Lvl3();
    accuracy = 0;
    gameState = 30;
  });
  retryGame3Lvl3.mousePressed(() => {
    setUpGame3Lvl3();
    accuracy = 0;
    gameState = 30;
  });
  proceedToGame4Lvl1.mousePressed(() => {
    setUpGame4Lvl1();
    gameState = 34;
  });
  retryGame4Lvl1.mousePressed(() => {
    setUpGame4Lvl1();
    gameState = 34;
  });
  goToGame4Lvl2.mousePressed(() => {
    setUpGame4Lvl2();
    gameState = 37;
  });
  retryGame4Lvl2.mousePressed(() => {
    setUpGame4Lvl2();
    gameState = 37;
  });
}
