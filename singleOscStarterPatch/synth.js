// Declare oscillator and gainNode globally so that they can be disconnected

var oscillator, gainNode;

// Create Audio Context

var context = new AudioContext(); // Create audio container

function noteOn(frequency) {
  
  // Oscillator, Waveform Attributes

  oscillator = context.createOscillator(); // Create oscillator 
  oscillator.type = "sine"; // Set Oscillator waveform
  oscillator.frequency.value = frequency; // Frequency in Hz is set by the function parameter 
  oscillator.start(0); // start oscillator, parameter is delay time in seconds
  
  // Gain Node

  gainNode = context.createGain(); // Create gain node
  gainNode.gain.value = 1; // Adjust volume 
  
  // Signal Routing

  oscillator.connect(gainNode); // Connect oscillator to gain node 
  gainNode.connect(context.destination); // Connect gain node to speakers
  
}; // end noteOn()

function noteOff() {
  
  oscillator.stop(0); // Stop the oscillator, parameter is delay time in seconds
  oscillator.disconnect(); // call to the garbage collector so you can call noteOn() again
  
}; // end noteOff()

$(document).keydown(function(e) {
  console.log(e);
  switch (e.keyCode) {
    case 90: // Z
      noteOn(82.407);
    break;
  }
}); // end keydown event.

$(document).keyup(function(e) {
  console.log(e);
  switch (e.keyCode) {
    case 90: // Z
      noteOff();
    break;
  }
}); // end keydown event.








