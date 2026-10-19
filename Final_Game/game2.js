function drawGame2() {
goToGame2Lvl2.hide();
retryGame2Lvl1.hide();
menu2BackButton.hide();
proceedToJugglingButton.hide();
movementTrackingBackButton.hide();
movementTrackingHomeButton.show();
movementTrackingHomeButton.position(340, 20)

game2Basics();
if (timerJuggling == 0 && pointsJuggling > 0) {
gameState = 15;
}
else if (pointsJuggling <= 0) {
gameState = 16;
}
}

function drawGame2Lvl2() {
goToGame2Lvl2.hide();
retryGame2Lvl1.hide();
menu2BackButton.hide();
retryGame2Lvl2.hide();
goToGame2Lvl3.hide();
proceedToJugglingButton.hide();
movementTrackingBackButton.hide();
movementTrackingHomeButton.show();
movementTrackingHomeButton.position(340, 20)

game2Basics();
if (timerJuggling == 0 && pointsJuggling > 0) {
gameState = 18;
}
else if (pointsJuggling <= 0) {
gameState = 19;
}
}

function drawGame2Lvl3() {
menu2BackButton.hide();
retryGame2Lvl2.hide();
goToGame2Lvl3.hide();
retryGame2Lvl3.hide();
game1Lvl3Pass.hide();
proceedToJugglingButton.hide();
movementTrackingBackButton.hide();
movementTrackingHomeButton.show();
movementTrackingHomeButton.position(340, 20)

game2Basics();
if (timerJuggling == 0 && pointsJuggling > 0) {
gameState = 21;
}
else if (pointsJuggling <= 0) {
gameState = 22;
}  
}