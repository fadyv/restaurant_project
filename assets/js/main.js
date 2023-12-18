


// Get all the decrease and increase buttons on the page
var decreaseButtons = document.querySelectorAll(".decrease");
var increaseButtons = document.querySelectorAll(".increase");

// Add click event listeners to each set of buttons
for (var i = 0; i < decreaseButtons.length; i++) {
	decreaseButtons[i].addEventListener("click", function () {
		// Get the input element within the same counter-box
		var inputElement = this.parentElement.querySelector("input");

		// Get the current value of the input
		var currentValue = parseInt(inputElement.value);

		// Make sure the value is greater than 1
		if (currentValue > 1) {
			// Decrease the value by 1
			inputElement.value = currentValue - 1;
		}
	});
}

for (var i = 0; i < increaseButtons.length; i++) {
	increaseButtons[i].addEventListener("click", function () {
		// Get the input element within the same counter-box
		var inputElement = this.parentElement.querySelector("input");

		// Get the current value of the input
		var currentValue = parseInt(inputElement.value);

		// Increase the value by 1
		inputElement.value = currentValue + 1;
	});
}

// Add input event listener to prevent entering values less than 1 or negative
var inputElements = document.querySelectorAll(".counter-box input");
for (var i = 0; i < inputElements.length; i++) {
	inputElements[i].addEventListener("input", function () {
		var inputValue = parseInt(this.value);
		if (isNaN(inputValue) || inputValue < 1) {
			this.value = "1";
		}
	});
}



  
// Function for allowing only letters and spaces on keydown
function handleKeydown(event) {
	const allowedKeys = /[a-zA-Zء-ي\s]/;
	const keyPressed = event.key;
  
	if (!allowedKeys.test(keyPressed)) {
		event.preventDefault();
	}
  }
  
  // Function for preventing users from pasting numbers in input
  function handlePaste(event) {
	event.preventDefault();
  
	const clipboardData = event.clipboardData || window.clipboardData;
	const pastedText = clipboardData.getData('text/plain');
	const allowedPattern = /^[a-zA-Zء-ي\s]+$/;
  
	if (!allowedPattern.test(pastedText)) {
		// Optionally, you can display an error message or perform some action here.
		return;
	}
  
	// Manipulate the pasted text if needed
	const modifiedText = pastedText.toUpperCase();
  
	// Insert the modified text into the input field or perform any other desired action
	const inputElement = event.target;
	const currentPosition = inputElement.selectionStart || 0;
	const inputValue = inputElement.value;
	const newValue = inputValue.slice(0, currentPosition) + modifiedText + inputValue.slice(currentPosition);
	inputElement.value = newValue;
  }
  
  
  // Function for allowing only numbers on keydown
  function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
  }
  
  // Function for preventing users from pasting letters in number input
  function onPaste(event) {
	const pastedText = event.clipboardData?.getData('text');
	if (pastedText && /\D/.test(pastedText)) {
		event.preventDefault(); // Cancel the paste action if it contains non-numeric characters
	}
  }


  $(window).on("load", function () {
	$("#loading-area").fadeOut();
	$("body").css('overflow','auto')

  })