//Birth Data USA 2019-2021 Graph 
//* Week 11 Assignment Instructions
Record data in a spreadsheet/CSV format. 
Convert the data to JSON and save to .json file using the Convert CSV to JSON or Mr. Data Converter tools.
Using your .json file, visualize the data using p5.js.
*/

//Upload JSON file and set useful variables
let birthData;
var xpos=100;
let colors = [
'#ea6e93',
'#f1d31a',
'#a5e6fc'
];
function preload(){
 birthData= loadJSON('BIRTH%20YEAR.json');
}

function setup() {
createCanvas(windowWidth, windowHeight);
background('#fdaca2');
birthData = Object.values(birthData);

	// Each loop obtains value (month) from preloaded JSON file and draws rectangles//Birth JAN-MAY 2019-2021
	noStroke();	
	for(let i in birthData){
		let bJan =  birthData[i].JAN
	fill(colors[i % colors.length]); //Will color rectangles from each year for chosen month
	rect(xpos,height/2,15,-bJan);
	text(birthData[i].JAN, 35, i+60); //Will extract values for each year of chosen month from JSON file and put it in text
	}
	for (let a in birthData){
		let bFeb = birthData[a].FEB
		fill(colors[a % colors.length]);
	rect(xpos*2,height/2,15,-bFeb);
		text(birthData[a].FEB, xpos*2+20, a+60);
	}
	for (let b in birthData){
		let bMar =  birthData[b].MAR
		fill(colors[b % colors.length]);
		rect(xpos*3,height/2,15,-bMar);
		text(birthData[b].MAR, xpos*3+20, b+60);
	}
	for (let c in birthData){
		let bApril = birthData[c].APRIL
	fill(colors[c % colors.length]);
	rect(xpos*4,height/2,15,-bApril);
	text(birthData[c].APRIL, xpos*4+20, c+60);
	}
	for (let d in birthData){
		let bMay= birthData[d].MAY
		fill(colors[d % colors.length]);
	rect(xpos*5,height/2,15,-bMay);
		text(birthData[d].MAY, xpos*5+20, d+60);
		}
		    }

function draw() {
	// Name each rectangle 
	textSize(16);
	fill('#231db7');
	text('Birth Chart 2019-2021 https://www.cdc.gov/nchs/data/vsrr/vsrr019.pdf',xpos,height/2+200)// data source in text
	text('January',xpos-20, height/2+20);
	text('February',xpos+50, height/2+20);
	text('March',xpos+150, height/2+20);
	text('April',xpos+250, height/2+20);
	text('May',xpos+350, height/2+20);

	//Color Legend
	fill('#ea6e93')
	rect(width/2,100,40,40)
	textSize(20);
	text('2019',width/2+50,100)

 fill('#f1d31a')
	rect(width/2,200,40,40)
		textSize(20);
	text('2020',width/2+50,200)

	fill('#a5e6fc')
	rect(width/2,300,40,40)
		textSize(20);
  text('2021',width/2+50,300)
}