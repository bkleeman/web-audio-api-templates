  // Creating Nodes
  
  var context = new AudioContext(); // Create audio container
  
  // Oscillators
  
  oscillator1 = context.createOscillator(); // Create oscillator 1
  oscillator2 = context.createOscillator(); // Create oscillator 2
  oscillator3 = context.createOscillator(); // Create oscillator 3
  
  // Gain Nodes
  
  gainNode1 = context.createGain(); // Create gain node
  gainNode2 = context.createGain(); // Create gain node 2
  gainNode3 = context.createGain(); // Create gain node 3
  
  // Waveform Attributes
  
  oscillator1.type = "sine"; // Set Oscillator 1 waveform
  oscillator1.frequency.value = 200; // Set frequency in hz
  
  oscillator2.type = "square" // Set Oscillator 2 waveform
  oscillator2.frequency.value = 100; // Set frequency in hz
  
  oscillator3.type = "triangle" // Set Oscillator 3 waveform
  oscillator3.frequency.value = 50; // Set frequency in hz
  
  // Signal Routing
  
  oscillator1.connect(gainNode1); // Connect oscillator 1 to gain node 1
  gainNode1.connect(context.destination); // Connect gain node to speakers
  
  oscillator2.connect(gainNode2); // Connect oscillator 2 to gain node 2
  gainNode2.connect(context.destination); // Connect gain node 2 to speakers
  
  oscillator3.connect(gainNode3); // Connect oscillator 3 to gain node 3
  gainNode3.connect(context.destination); // Connect gain node 3 to speakers
  
  // Volume Adjustments
  
  gainNode1.gain.value = 0.5; // Adjust volume via gain node
  gainNode2.gain.value = 0.05; // Adjust volume via gain node 2
  gainNode3.gain.value = 0.6; // Adjust volume via gain node 3
  
  oscillator1.start(0); // start oscillator 1
  oscillator2.start(0); // start oscillator 2
  oscillator3.start(0); // start oscillator 3