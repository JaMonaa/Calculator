var currentInput = "";
var previousInput = "";
var operation = null;

// Second step
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Fourth step
function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString(); // Ensure it's a string for further operations
    operation = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = null;
    $("h3").text("Start Calculating");
}

// Third step
function updateDisplay() {
    $("h3").text(currentInput);
}

// First step + Fifth step (after selecting the operator - sets the currentInput)
$(".btn").click(function () {
    const number = $(this).text();
    if (!isNaN(number)) {
        appendNumber(number);
    }
});

$(".equal").click(calculateResult);
$(".delete").click(clearDisplay);
