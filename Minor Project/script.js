// Variables
let expression = '';

// Functions
function clearScreen() {
  expression = '';
  document.getElementById('result').value = '';
}
function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById('result').value = expression;
  }
  
function appendCharacter(char) {
  expression += char;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
