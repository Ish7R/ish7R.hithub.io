// Week 10: Rita.js Choose one of the following poems, and replace all nouns and adjectives in the text with random nouns and adjectives.

//I wrote the text, you can access it through the link. Have fun. I do not own the images.
var loadpoem=[];
var neo;

function preload(){
 loadpoem= loadStrings('https://ish7r.github.io/ish7R.hithub.io/rita_me.txt');
	neo= loadImage('https://ish7R.github.io/ish7R.hithub.io/33.jpeg');
}

function setup() {
	background (107,13,47)
	createCanvas(windowWidth, windowHeight);
	textFont('Times New Roman', 18);
	textAlign(CENTER);
	fill(255)
	translate(width/2,100);

	//Loads poem structure
text(loadpoem.join('\n'),10,15)	
}

function changeWord () {
	// Rita analyzes POS
		let stanzas="";
		let poem;
	for (p=0; p<loadpoem.length; p++) {
	 poem= RiTa.tokenize(loadpoem[p]);
	//Replacing nouns with mousepress
	for (var n=0;  n<poem.length; n++) {
	  let newWord= poem[n];
		
		//Replace Nouns
		if(RiTa.isNoun(newWord)){
			newWord = RiTa.randomWord({ pos: "nn"});	
		}
		
		//Replace Adjectives
		//if (RiTa.isAdjective(newWord)){
			//newWord = RiTa.randomWord({ pos: "jj"});
		//}

	stanzas += newWord + " ";
			
	}
	
		stanzas += "\n";
	
	}
return stanzas;
   }

function draw() { 
	//Background for poem

var	r = random(255); // r is a random number between 0 - 255
var g = random(100,200); // g is a random number betwen 100 - 200
var b = random(100); // b is a random number between 0 - 100
var a = random(200,255); // a is a random number between 200 - 255
	
	//Crescent Moon
push();
  fill(r,g,b,a);//86,219,153)
  noStroke();
  ellipse(300, 100, 125, 125);
  fill(82,243,126);
  noStroke();
  ellipse(275, 100, 125, 125);

	//Stars
fill(r,g,b,a);
  noStroke();
  ellipse(-125,-90, 5, 5);
  ellipse(125, 90, 5, 5);
  ellipse(200, 25, 5, 5);
  ellipse(225, 100, 5, 5);
  ellipse(30, 150, 5, 5);
  ellipse(175, 150, 5, 5);
  ellipse(350, 200, 5, 5);
pop();

}

function mouseClicked(){
	clear();
	//load new poem when mouse pressed
 let poemToPrint = "";
	poemToPrint=changeWord();
	translate(width/2,100)
	
	text(poemToPrint, 20,20);
	
//allows copy/paste
	console.log(poemToPrint);
}
