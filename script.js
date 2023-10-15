let currentInput = '';
let currentValue = null;
let currentOperator = null;

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  if (currentInput === '') return;
  const inputValue = parseFloat(currentInput);
  
  if (currentValue === null) {
    currentValue = inputValue;
  } else {
    switch (currentOperator) {
      case '+':
        currentValue += inputValue;
        break;
      case '-':
        currentValue -= inputValue;
        break;
      case '*':
        currentValue *= inputValue;
        break;
      case '/':
        if (inputValue === 0) {
          alert("Cannot divide by zero!");
          clearDisplay();
          return;
        }
        currentValue /= inputValue;
        break;
    }
  }
  currentOperator = null;
  currentInput = currentValue.toString();
  document.getElementById('display').value = currentInput;
}
