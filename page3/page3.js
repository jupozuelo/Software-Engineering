let bathS, bathM, bathL;
var myButton;
var myButton2;
var bubbles = [];

function preload() {
   bathS = loadImage('s.png');
   bathM = loadImage('m.png');
   bathL = loadImage('l.png');
}

function setup() {
   var cnv = createCanvas(windowWidth, windowHeight);
   cnv.style('display', 'block');
   background(255, 255, 255);
   image(bathS, 70, 100);
   image(bathM, 220, 60);
   image(bathL, 400, 0);

   //BUBBLES ON BUTTON
   myButton = new Clickable();     //Create button
   myButton.cornerRadius = 70;
   myButton.text = "BUBBLES ON?";
   myButton.textFont = "Lucida Console";
   myButton.textSize = 20;
   myButton.textColor = "#68E8DB";
   myButton.textStyle = BOLD;
   myButton.color = "#3FBFBF";
   myButton.strokeWeight = 5;        //Stroke width of the clickable (float)
   myButton.stroke = "#BCEFEF";      //Border color of the clickable (hex number as a string)
   myButton.locate(70, 220);
   myButton.width = 150;
   myButton.height = 150;
   myButton.onPress = function(){  //When myButton is pressed
      this.color = "#17D7C4";        //Change button color
      this.text = "BUBBLES ON SELECTED";
   }

   //BUBBLES OFF BUTTON
   myButton2 = new Clickable();     //Create button
   myButton2.cornerRadius = 80;
   myButton2.text = "BUBBLES OFF?";
   myButton2.textColor = "#68E8DB";
   myButton2.textStyle = BOLD;
   myButton2.textFont = "Lucida Console";
   myButton2.textSize = 20;
   myButton2.color = "#3FBFBF";
   myButton2.strokeWeight = 5;        //Stroke width of the clickable (float)
   myButton2.stroke = "#BCEFEF";      //Border color of the clickable (hex number as a string)
   myButton2.locate(250, 320);
   myButton2.width = 150;
   myButton2.height = 150;
   myButton2.onPress = function(){  //When myButton is pressed
      this.color = "#17D7C4";        //Change button color
      this.text = "BUBBLES OFF SELECTED";
   }

   //GO BUTTON
   myButton3 = new Clickable();     //Create button
   myButton3.cornerRadius = 100;
   myButton3.text = "GO!";
   myButton3.textColor = "#1AA294";
   myButton3.textSize = 60;
   myButton3.textFont = "Helvetica Neue";
   myButton3.textStyle = BOLD;
   myButton3.color = "#67DACE";
   myButton3.strokeWeight = 5;        //Stroke width of the clickable (float)
   myButton3.stroke = "#1AA294";      //Border color of the clickable (hex number as a string)
   myButton3.locate(400, 200);
   myButton3.width = 175;
   myButton3.height = 175;

   myButton3.onHover = function() {
      myButton3.color = "#C9ECE9";
   }

   for (let i = 0; i < 10; i++) {
      let x = random(0, 500);
      let y = random(200, 500);
      let r = random(10, 60);
      bubbles[i] = new Bubble(x, y, r);
   }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
   var slider = document.getElementById("tempSlider");
   myButton.draw();
   myButton2.draw();
   myButton3.draw();
   for (let i = 0; i<10; i++) {
      bubbles[i].move();
      bubbles[i].show();
   }
}

class Bubble {
   constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
   }

   move() {
      this.x = this.x + random(-0.5, 0.5);
      this.y = this.y + random(-0.5, 0.5);
   }

   show() {
      stroke('#79F0E4');
      strokeWeight(0.5);
      noFill();
      ellipse(this.x, this.y, this.r * 2);
   }
}
