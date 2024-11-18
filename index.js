const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    adjustFontSize();
}

function clearDisplay() {
    display.value = "";
    adjustFontSize();
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    adjustFontSize();
}

function adjustFontSize() {
    const length = display.value.length;
    if (length > 15) {
        display.style.fontSize = '2rem';  
    } else {
        display.style.fontSize = '4rem'; 
    }
}
