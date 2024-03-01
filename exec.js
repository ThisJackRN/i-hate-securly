document.addEventListener('keydown', function(event) {
  // Check if Ctrl, Shift, and ~ keys are pressed simultaneously
  if (event.ctrlKey && event.shiftKey && event.key === '~') {
    event.preventDefault(); // Prevent the default action

    // Function to open evaluation prompt
    function evalPrompt() {
      var code = prompt("Enter your JavaScript code:");
      try {
        // Evaluate the code
        var result = eval(code);
        console.log("Result:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    evalPrompt(); // Open the evaluation prompt
  }
