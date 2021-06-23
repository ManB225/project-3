let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 25;

function setup() {
	createCanvas(windowWidth, windowHeight); //screen size
	PixelDog = loadImage("PixelDog.png"); //PixelDog image
	imageMode(CENTER); //the image is at the Center of the screen 

	strokeWeight(random(0, 75));

}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(136, 69, 19);
	fill(136, 69, 19);
	rect(100, 80, 100, 400);
	rect(1200, 80, 100, 400);

	strokeWeight(4);
	stroke(0, 128, 0);
	fill(0, 128, 0);
	ellipse(100, 80, 80, 80);
	ellipse(1300, 80, 80, 80);
	ellipse(200, 80, 80, 80);
	ellipse(1200, 80, 80, 80);

	textAlign(RIGHT, BOTTOM);
	text("Manahil B", windowWidth, windowHeight); // bottom-right
	textSize(50);

	var xValue = random(600); //saves a random number to a variable

	stroke(random(0, 245), random(0, 245), random(0, 245))
	point(xValue, random(600));
	strokeWeight(random(50, 75)); //sets the stroke weight

	ellipse(x, y, r * 2, r * 2);
	x += xspeed;
	y += yspeed;
	if (x > width - r || x < r) {
		xspeed = -xspeed;
	}
	if (y > height - r || y < r) {
		yspeed = -yspeed;
	}



	image(PixelDog, mouseX, mouseY); //image follows mouse
}
