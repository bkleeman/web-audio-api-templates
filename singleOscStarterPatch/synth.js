$(function() {

  // Declare oscillator, gainNode, and modifiers globally so that they can be disconnected

  var oscillator, gainNode, filter, filterFreq, freqSlider, qSlider, filterGainSlider;
  
  // Set initial levels
  
  filterFreq = 50;
  filterQ = 50;
  filterGain = 10;
  oscVol = 500
  
  // Create jQuery UI Slider objects to control and map values to parameters
  
  volumeSlider = $("#volumeSlider").slider({
    max: 1000,
    min: 0,
    orientation: 'vertical',
    value: 500,
    change: function(event, ui) {
      console.log(ui.value);
      oscVol = ui.value;
    }
  }); 
  
  freqSlider = $("#freqSlider").slider({
    max: 1000,
    min: 1,
    orientation: 'vertical',
    value: 50,
    change: function(event, ui) {
      console.log(ui.value);
      filterFreq = ui.value;
    }
  });
  
  qSlider = $("#qSlider").slider({
    max: 100,
    min: 1,
    orientation: 'vertical',
    value: 0,
    change: function(event, ui) {
      console.log(ui.value);
      filterQ = ui.value;
    }
  });
  
  filterGainSlider = $("#filterGainSlider").slider({
    max: 1000,
    min: 1,
    orientation: 'vertical',
    value: 0,
    change: function(event, ui) {
      console.log(ui.value);
      filterGain = ui.value;
    }
  });

  // Create Audio Context

  var context = new AudioContext({
    latencyHint: "interactive",
    sampleRate: 44100
  }); // Create audio container
  
  // Allow user to create sound

  function noteOn(frequency) {

    // Oscillator, Waveform Attributes

    oscillator = context.createOscillator(); // Create oscillator 
    oscillator.type = "sine"; // Set Oscillator waveform
    oscillator.frequency.value = frequency; // Frequency in Hz is set by the function parameter 
    oscillator.start(0); // start oscillator, parameter is delay time in seconds

    // Filter Node

    filter = context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = filterFreq;
    filter.Q.value = filterQ;
    filter.gain.value = filterGain;

    // Gain Node

    gainNode = context.createGain(); // Create gain node
    gainNode.gain.value = oscVol * 0.001; // Adjust volume. Use small values.

    // Signal Routing

    oscillator.connect(filter); // Connect oscillator to gain node 
    filter.connect(gainNode);
    gainNode.connect(context.destination); // Connect gain node to speakers

  }; // end noteOn()

  // End user created sound
  
  function noteOff() {

    oscillator.stop(0); // Stop the oscillator, parameter is delay time in seconds
    oscillator.disconnect(); // call to the garbage collector so you can call noteOn() again

  }; // end noteOff()
  
  function panic() {
    
    console.log("panic button click");
    oscillator.stop();
    console.log("oscillator stopped");
    oscillator.disconnect();
    console.log("oscillator disconnected");
    context.close();
    console.log("context closed");
    context = new AudioContext();
    console.log("new context created");
    
  }

  // Allow user input to come from QWERTY keyboard, oriented across "ASDF...".
  
  $(document).keydown(function(e) {
    console.log(e);
    switch (e.keyCode) {

      // White Keys

      case 65: // A
        noteOn(130.8); // C3
        $("#a").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 83: // S
        noteOn(146.8); // D3
        $("#s").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 68: // D
        noteOn(164.8); // E3
        $("#d").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 70: // F
        noteOn(174.6); // F3
        $("#f").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 71: // G
        noteOn(196.0); // G3
        $("#g").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 72: // H
        noteOn(220.0); // A3
        $("#h").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 74: // J
        noteOn(246.9); // B3
        $("#j").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 75: // K
        noteOn(261.6); // C4
        $("#k").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 76: // L
        noteOn(293.7); // D4
        $("#l").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      // Black Keys

      case 87: // W
        noteOn(138.6); // C#3
        $("#w").css({
          border: "1px solid",
          borderColor: "blue",
        });
      break;

      case 69: // E
        noteOn(155.6); // D#3
        $("#e").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 84: // T
        noteOn(185.0); // F#3
        $("#t").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 89: // Y
        noteOn(207.7); // G#3
        $("#y").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 85: // U
        noteOn(233.1); // A#3
        $("#u").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 79: // O
        noteOn(277.2); // C#4
        $("#o").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

      case 80: // P
        noteOn(311.1); // D#4
        $("#p").css({
          border: "1px solid black",
          borderColor: "blue",
        });
      break;

    }
  }); // end keydown event.

  // Silence user input from QWERTY keyboard.
  
  $(document).keyup(function(e) {
    console.log(e);
    switch (e.keyCode) {

      // White Keys

      case 65: // A
        noteOff(); // C3
        $("#a").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 83: // S
        noteOff(); // D3
        $("#s").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 68: // D
        noteOff(); // E3
        $("#d").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 70: // F
        noteOff(); // F3
        $("#f").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 71: // G
        noteOff(); // G3
        $("#g").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 72: // H
        noteOff(); // A3
        $("#h").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 74: // J
        noteOff(); // B3
        $("#j").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 75: // K
        noteOff(); // C4
        $("#k").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 76: // L
        noteOff(); // D4
        $("#l").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      // Black Keys

      case 87: // W
        noteOff(); // C#3
        $("#w").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 69: // E
        noteOff(); // D#3
        $("#e").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 84: // T
        noteOff(); // F#3
        $("#t").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 89: // Y
        noteOff(); // G#3
        $("#y").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 85: // U
        noteOff(); // A#3
        $("#u").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 79: // O
        noteOff(); // C#4
        $("#o").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;

      case 80: // P
        noteOff(); // D#4
        $("#p").css({
          borderStyle: "solid",
          borderColor: "gray"
        });
      break;
    }
  }); // end keydown event.
  
  // Panic button to silence runaway oscillators.
  
  $("#stop").click(function() {
    
    panic();

  }); // end panic button
  
  // Panic button using the P key
  
  $(document).keydown(function(e) {
    console.log(e);
    switch (e.keyCode) {
      case 81: // Q
        panic();
      break;
    }
  }); // end panic keydown

}); //end jQuery function