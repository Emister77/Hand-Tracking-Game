function Background1() {
 background(255, 253, 208);
  fill(255,0,0);
  beginShape();
  vertex(100,120)
  vertex(300,120)
  vertex(300,320)
  vertex(100,320)
  endShape(CLOSE); 
}

function Background2() {
 background(255, 253, 208);
  fill(255,0,0);
  beginShape();
  vertex(20,100)
  vertex(375,100)
  vertex(375,400)
  vertex(20,400)
  endShape(CLOSE); 
}

function restart() {
  pointsTracing = 100;
  drawnLines.length = 0;
  setup();
}

function game4Basics() {
if (mouseIsPressed === true && frameCount % 60 == 0 && timerTracing > 0) {
    timerTracing--;
  }

  drawnLines.forEach((drawnLine) => {
    strokeWeight(10);
    line(
      drawnLine.mouseX,
      drawnLine.mouseY,
      drawnLine.pmouseX,
      drawnLine.pmouseY
    );
  });

  // Display timer and points
  textSize(22);
  fill(255, 0, 0);
  text("Time: " + timerTracing, 10, 60);

  textSize(22);
  fill(255, 0, 0);
  text("Points: " + round(pointsTracing), 10, 30);

  // Check for success or failure
}



function mouseDragged() {
  if (mouseX > 0 && mouseX < 430 && mouseY > 0 && mouseY < 530) {
    playing();
  } 
}

function playing() {
  if (!locked && pointsTracing > 0) {
    drawnLines.push({
      mouseX: mouseX,
      mouseY: mouseY,
      pmouseX: pmouseX,
      pmouseY: pmouseY,
    });
  }
}

function game4Lvl1Win() {
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("Success!", 100, 150);
retryGame4Lvl1.show();
goToGame4Lvl2.show();
}

function game4Lvl1Lose() {
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
retryGame4Lvl1.show();
}

function game4Lvl2Win() {
background(255, 253, 208);
textSize(50);
fill(0,255,0);
text("Success!", 100, 150);
retryGame4Lvl2.show();
goToGame4Lvl3.show();
}

function game4Lvl2Lose() {
background(0,0,0);
textSize(50);
fill(255,0,0);
text("Fail!", 150, 150);
retryGame4Lvl2.show(); 
}