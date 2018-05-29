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

    // White Keys

    case 65: // A
      noteOn(130.8); // C3
    break;
    
    case 83: // S
      noteOn(146.8); // D3
    break;
      
    case 68: // D
      noteOn(164.8); // E3
    break;
      
    case 70: // F
      noteOn(174.6); // F3
    break;
      
    case 71: // G
      noteOn(196.0); // G3
    break;
      
    case 72: // H
      noteOn(220.0); // A3
    break;
      
    case 74: // J
      noteOn(246.9); // B3
    break;
      
    case 75: // K
      noteOn(261.6); // C4
    break;
      
    case 76: // L
      noteOn(293.7); // D4
    break;
      
    // Black Keys
    
    case 87: // W
      noteOn(138.6); // C#3
    break;
    
    case 69: // E
      noteOn(155.6); // D#3
    break;
      
    case 84: // T
      noteOn(185.0); // F#3
    break;
      
    case 89: // Y
      noteOn(207.7); // G#3
    break;
      
    case 85: // U
      noteOn(233.1); // A#3
    break;
      
    case 79: // O
      noteOn(277.2); // C#4
    break;
      
    case 80: // P
      noteOn(311.1); // D#4
    break;
    
  }
}); // end keydown event.

$(document).keyup(function(e) {
  console.log(e);
  switch (e.keyCode) {
    
    // White Keys
    
    case 65: // A
      noteOff(); // C3
    break;
      
    case 83: // S
      noteOff(); // D3
    break;
      
    case 68: // D
      noteOff(); // E3
    break;
      
    case 70: // F
      noteOff(); // F3
    break;
      
    case 71: // G
      noteOff(); // G3
    break;
      
    case 72: // H
      noteOff(); // A3
    break;
      
    case 74: // J
      noteOff(); // B3
    break;
      
    case 75: // K
      noteOff(); // C4
    break;
      
    case 76: // L
      noteOff(); // D4
    break;

    // Black Keys

    case 87: // W
      noteOff(); // C#3
    break;
    
    case 69: // E
      noteOff(); // D#3
    break;
      
    case 84: // T
      noteOff(); // F#3
    break;
      
    case 89: // Y
      noteOff(); // G#3
    break;
      
    case 85: // U
      noteOff(); // A#3
    break;
      
    case 79: // O
      noteOff(); // C#4
    break;
      
    case 80: // P
      noteOff(); // D#4
    break;
  }
}); // end keydown event.