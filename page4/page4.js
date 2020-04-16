var counter = 0;
var timeleft = 5;
var sound;
var bath;
var bubbles = [];

function preload() {
   sound = loadSound("sound.mp3");
}

function convertSeconds(s) {
   var min = floor(s / 60);
   var sec = s % 60;
   return nf(min, 2) + ':' + nf(sec, 2);
}

function setup() {
   var cnv = createCanvas(windowWidth,windowHeight);
   cnv.style('display', 'block');
   background(255, 255, 255);

   //This is for the annimated BATH
   bath = createSprite(25, 25);
   bath.addAnimation('normal', 'smallbath.png');
   bath.velocity.x = 2;

   //This is for the TIMER
   var timer = select('#timer'); //gave the id in the html file so
                                 //you can access it from JS
   timer.html(convertSeconds(timeleft - counter));

   var interval = setInterval(timeIt, 1000);  // this timeIt function should
                                             // happen every  1000 ms,
                                             // i.e. every 1 sec

   function timeIt() {
      counter++;
      timer.html(convertSeconds(timeleft - counter)); //every second increase
                                                      //the counter and then
                                                      //updatethe element
      if (counter == timeleft) {
         sound.play();
         clearInterval(interval);
      }
   }

   //CHANGE SETTINGS
   myButton = new Clickable();     //Create button
   myButton.cornerRadius = 70;
   myButton.text = "CHANGE SETTINGS";
   myButton.textFont = "Lucida Console";
   myButton.textSize = 20;
   myButton.textColor = "#68E8DB";
   myButton.textStyle = BOLD;
   myButton.color = "#3FBFBF";
   myButton.strokeWeight = 10;        //Stroke width of the clickable (float)
   myButton.stroke = "#BCEFEF";      //Border color of the clickable (hex number as a string)
   myButton.locate(70, 200);
   myButton.width = 200;
   myButton.height = 100;
   myButton.onPress = function(){  //When myButton is pressed
      this.color = "#17D7C4";        //Change button color
      this.text = "REDIRECTING";
      clearInterval(interval);
   }

   //CANCEL BATH
   myButton2 = new Clickable();     //Create button
   myButton2.cornerRadius = 50;
   myButton2.text = "CANCEL CURRENT BATH";
   myButton2.textColor = "#68E8DB";
   myButton2.textStyle = BOLD;
   myButton2.textFont = "Lucida Console";
   myButton2.textSize = 20;
   myButton2.color = "#3FBFBF";
   myButton2.strokeWeight = 10;        //Stroke width of the clickable (float)
   myButton2.stroke = "#BCEFEF";      //Border color of the clickable (hex number as a string)
   myButton2.locate(300, 320);
   myButton2.width = 200;
   myButton2.height = 100;
   myButton2.onPress = function(){  //When myButton is pressed
      this.color = "#17D7C4";        //Change button color
      this.text = "CANCELING BATH";
      clearInterval(interval);
   }

   for (let i = 0; i < 10; i++) {
      let x = random(0, windowWidth);
      let y = random(20, windowHeight);
      let r = random(0, 100);
      bubbles[i] = new Bubble(x, y, r);
   }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
   for (let i = 0; i<10; i++) {
      bubbles[i].move();
      bubbles[i].show();
   }

   if(bath.position.x > width) {
      bath.position.x = 0;
   }

   drawSprites();
   myButton.draw();
   myButton2.draw();
}

class Bubble {
   constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
   }

   move() {
      this.x = this.x + random(-20, 20);
      this.y = this.y + random(-1,10);
   }

   show() {
      stroke('#79F0E4');
      strokeWeight(0.5);
      noFill();
      ellipse(this.x, this.y, this.r * 2);
   }
}
