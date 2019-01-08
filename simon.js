$(document).ready(function() {

  var sequence = [];
  var input = [];
  var code = ["red", "red", "red", "yellow", "blue", "green", "green","green"];
  var colors = ["green", "red", "yellow", "blue"];

  function clearBorders() {
    $(".colorButton").css("border", "1px solid lightgray");
  }
  clearBorders();

  var j = 0; //  set counter
  function playLoop() { //  create a loop function
    setTimeout(function() { //  call a setTimeout when the loop is called
        input = [];
        clearBorders();
        $("#" + sequence[j]).css("border", "5px solid magenta");

        setTimeout(function() {
            clearBorders();
          }, 500) // Duration of border. Both setTimeout start at the same time.
        j++;
        if (j < sequence.length) {
          playLoop();
        }
      }, 750) // End of setTimeout(...)  Time between current and next border.
    	
  }

  function playSequence() {
    playLoop();
    j = 0;
    clearBorders();
  }

  function addColor(show) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(color);
    if (show) {
      $("#" + color).css("border", "5px solid magenta");
      setTimeout(function() {
        clearBorders();
      }, 400);
    }
  }
  
  // Handlers
  // Handlers
  // Handlers

  $("#playSequence").click(function() {
    playSequence();
    input = [];
  });

  $("#add").click(function() {
    addColor(false);
  });

  $("#show").click(function() {
    alert("sequence: " + sequence);
    alert("input: " + input);
  });

	$("#resetAll").click(function() {
    input = [];
    sequence = [];
  });

  $("#reset").click(function() {
    input = [];
  });

  $(".colorButton").click(function() {
  	input.push(this.id);
		$("#" + this.id).css("border", "5px solid violet");
			setTimeout(function() {
    	clearBorders();
     }, 150);
    
    
    if (input.toString() == code.toString()) {
    	alert("Code accepted: debugging buttons activated.");
      $(".debug").css("display", "inline"); // inline is default
      input = [];
    }
    
  });

  $("#submit").click(function() {
    if (input.toString() == sequence.toString()) {
    	$("#play").prop("disabled", false);
      alert("You are correct!");
    } else {
      alert("You have lost!");
      sequence = [];
      $("#play").prop("disabled", false);    
    }
  });

  $("#play").click(function() {
      addColor(false);
      playSequence(); // input is emptied here
      $("#play").prop("disabled", true);
      checkInput();
  });

});
