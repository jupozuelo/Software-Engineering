var spotifyButton;
var lightButton;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
   var cnv = createCanvas(windowWidth,windowHeight);
   cnv.style('display', 'block');
   background(255, 255, 255);

   //Spotify
   spotifyButton = new Clickable();     //Create button
   spotifyButton.cornerRadius = 5;
   spotifyButton.text = "Spotify";
   spotifyButton.textFont = "Lucida Console";
   spotifyButton.textSize = 30;
   spotifyButton.textColor = "#68E8DB";
   spotifyButton.textStyle = BOLD;
   spotifyButton.color = "#3FBFBF";
   spotifyButton.strokeWeight = 30;        //Stroke width
   spotifyButton.stroke = "#BCEFEF";
   spotifyButton.locate(100, 200);
   spotifyButton.width = 200;
   spotifyButton.height = 100;
   spotifyButton.onPress = function(){  //When myButton is pressed
      this.color = "#17D7C4";           //Change button color
      this.text = "Redirecting";

   }

   //Lighting
   lightButton = new Clickable();     //Create button
   lightButton.cornerRadius = 5;
   lightButton.text = "Lighting";
   lightButton.textColor = "#68E8DB";
   lightButton.textStyle = BOLD;
   lightButton.textFont = "Lucida Console";
   lightButton.textSize = 30;
   lightButton.color = "#3FBFBF";
   lightButton.strokeWeight = 30;        //Stroke width
   lightButton.stroke = "#BCEFEF";      //Border color of the clickable
   lightButton.locate(400, 200);
   lightButton.width = 200;
   lightButton.height = 100;
   lightButton.onPress = function() {  //When myButton is pressed
      this.color = "#17D7C4";         //Change button color
      this.text = "Loading";
   }
}

function draw() {
   lightButton.draw();
   spotifyButton.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
