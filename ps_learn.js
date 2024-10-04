// ps3.js lib
// sketch.js

// run only one time
function setup() {
    createCanvas(640, 480); // Creates a canvas of 640x480 pixels
    background(200); // Sets a background color (light gray
    shahrukh_img =  loadImage('images/shahrukh.png')
}

// Drawing code here (optional, but needed for dynamic content)

// run infinite time
function draw() {
    // Your drawing code here...
    // thats how you draw shapes 

//    point(200,200)
image(shahrukh_img, 100,100,100, 100)

//    line(200,200,300,300)

//    triangle(100, 200, 300, 400,150, 450)

//    rect(500, 200, 100, 100 )

//     ellipse(4300, 40 ,100,40)

fill(232, 100, 34)
stroke(255, 0,0,15)
strokeWeight(5)
ellipse(100, 200 ,100,100)
stroke(255, 0,0)
ellipse(250, 200 ,100,100)
ellipse(400, 200 ,100,100)
stroke(0, 0,255)
ellipse(550, 200 ,100,100)
ellipse(700, 200 ,100,100)
}
