// Create Audio Context

var context = new AudioContext(); // Create audio container

// Oscillator

oscillator = context.createOscillator(); // Create oscillator 

// Gain Node

gainNode = context.createGain(); // Create gain node

// Waveform Attributes

oscillator.type = "sine"; // Set Oscillator waveform
oscillator.frequency.value = 200; // Set frequency in hz

// Signal Routing

oscillator.connect(gainNode); // Connect oscillator to gain node 
gainNode.connect(context.destination); // Connect gain node to speakers

// Volume Adjustments

gainNode.gain.value = 0.5; // Adjust volume via gain node

oscillator.start(0); // start oscillator