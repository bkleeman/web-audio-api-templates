// Declare oscillators and gainNodes globally so that they can be disconnected

var oscillator1, oscillator2, oscillator3, gainNode1, gainNode2, gainNode3;

// Create Audio Context

var context = new AudioContext(); // Create audio container

function noteOn(frequency) {
  
  // Oscillators, Waveform Attributes

  oscillator1 = context.createOscillator(); // Create oscillator 1
  oscillator1.type = "sine"; // Set Oscillator 1 waveform
  oscillator1.frequency.value = frequency; // Set frequency in hz
  oscillator1.start(0); // start oscillator, parameter is delay time in seconds
  
  oscillator2 = context.createOscillator(); // Create oscillator 2
  oscillator2.type = "square" // Set Oscillator 2 waveform
  oscillator2.frequency.value = frequency // * 0.5; // Set frequency in hz
  oscillator2.start(0); // start oscillator, parameter is delay time in seconds
  
  oscillator3 = context.createOscillator(); // Create oscillator 3
  oscillator3.type = "triangle" // Set Oscillator 3 waveform
  oscillator3.frequency.value = frequency // / 2; // Set frequency in hz
  oscillator3.start(0); // start oscillator, parameter is delay time in seconds
  
  // Gain Nodes

  gainNode1 = context.createGain(); // Create gain node
  gainNode1.gain.value = 1; // Adjust volume via gain node
  
  gainNode2 = context.createGain(); // Create gain node 2
  gainNode2.gain.value = 1; // Adjust volume via gain node 2
  
  gainNode3 = context.createGain(); // Create gain node 3
  gainNode3.gain.value = 1; // Adjust volume via gain node 3
  
  // Signal Routing

  oscillator1.connect(gainNode1); // Connect oscillator 1 to gain node 1
  gainNode1.connect(context.destination); // Connect gain node to speakers

  oscillator2.connect(gainNode2); // Connect oscillator 2 to gain node 2
  gainNode2.connect(context.destination); // Connect gain node 2 to speakers

  oscillator3.connect(gainNode3); // Connect oscillator 3 to gain node 3
  gainNode3.connect(context.destination); // Connect gain node 3 to speakers
  
}; // End noteOn()

function noteOff() {
  // Stop and disconnect oscillators
  
  oscillator1.stop(0); // Stop the oscillator, parameter is delay time in seconds
  oscillator1.disconnect(); // call to the garbage collector so you can call noteOn() again
  
  oscillator2.stop(0); // Stop the oscillator, parameter is delay time in seconds
  oscillator2.disconnect(); // call to the garbage collector so you can call noteOn() again
  
  oscillator3.stop(0); // Stop the oscillator, parameter is delay time in seconds
  oscillator3.disconnect(); // call to the garbage collector so you can call noteOn() again
  
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