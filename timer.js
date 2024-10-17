const player = require('play-sound')(opts = {});
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to play the sound
function playSound() {
  player.play('Adam Lambert - Born to be Wild (Studio version).mp3', (err) => {
    if (err) {
      console.error(`Could not play sound: ${err}`);
    } else {
      console.log("Time's up! Sound played.");
    }
  });
}

// Function to start the timer
function startTimer(seconds) {
  console.log(`Timer started for ${seconds} seconds...`);
  setTimeout(() => {
    playSound(); // Play sound after timer finishes
  }, seconds * 1000*60); // Convert seconds milliseconds to minutes
}

// Prompt user for time input
rl.question('Enter time in minutes: ', (input) => {
  const seconds = parseInt(input);
  if (isNaN(seconds) || seconds <= 0) {
    console.log('Please enter a valid number.');
  } else {
    startTimer(seconds); 
    console.log(seconds);// Start the timer
  }
  rl.close(); // Close the input stream
});

