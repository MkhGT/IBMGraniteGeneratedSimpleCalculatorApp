let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number.toString();
    display.value = currentNumber;
}

function appendOperator(op) {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
    display.value = previousNumber + ' ' + operator;
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        case '%':
            result = parseFloat(previousNumber) % parseFloat(currentNumber);
            break;
        case '^':
            result = Math.pow(parseFloat(previousNumber), parseFloat(currentNumber));
            break;
        default:
            result = 0;
    }
    display.value = result.toString();
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}
