// A global instance of the class PImage which makes
// loading and manipulating images easier.
PImage my_img;


// The default setup().
void setup() {
  
  // Set the size of the application window.
  size( 800, 800 );
  
  // Load an initial digital image into my_img 
  my_img = loadImage("processing3-logo.png");
}


// The default draw loop(), here, simply draws 
// my_img to the screen.
void draw() {
  
   // Draws the image to the application window.
   // Note, two numbers locate x,y position of 
   // the top left corner of the PImage.
   image( my_img, 0, 0 ); 
}



// Here, we use keyPressed to reload my_img with a
// new image.  Note, these need to be stored in the
// sketch folder.
void keyPressed() {
  
  // Run some code if one of these keys is pressed.
  // Note, we check for lower and upper case here by
  // using a logical OR statement ||
  if( key == '1' || key == '!' ) {
    my_img = loadImage("image_1.png");
  } else if( key == '2' || key == '"' ) {
    my_img = loadImage("image_2.png");
  } else if( key == '3' || key == '£' ) {
    
  } else if( key == '4' || key == '$' ) {
    
  }   // etc
  
}
