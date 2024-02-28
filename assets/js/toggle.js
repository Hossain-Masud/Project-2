const toggleMode = document.getElementById('toggle-mode');
	const container = document.querySelector('.container');

	toggleMode.addEventListener('change', function() {
		container.classList.toggle('dark-mode');
	});

    document.addEventListener('keydown', function (event) {
        handleKeyPress(event.key);
    });

    // This function will be responsible for handling the button press from the keyboard..Try thses key also if want you can also chnage these settings,...
    function handleKeyPress(key) {
    //  "Enter" key is pressed, trigger the "=" button press
        if (key === 'Enter') {
            handleButtonPress('=');
        }
        // "Delete" or "Backspace" key is pressed, trigger the "CE" button press
        if (key === 'Delete' || key === 'Backspace') {
            handleButtonPress('CE');
        }
        //number key is pressed, trigger the corresponding number button press
        if (/[0-9]/.test(key)) {
            handleButtonPress(key);
        }
        //  operator key is pressed (+, -, *, /), trigger the corresponding operator button press
        if (/[\+\-\*\/%]/.test(key)) {
            handleButtonPress(key);
        }
    }
    function handleButtonPress(value) {
        // This function simulates the button press of the calculator for the given value
        // Find the corresponding button element based on the value
        const button = document.querySelector(`button[value="${value}"]`);
        if (button) {
            button.click();
        }
    }
