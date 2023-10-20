const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]')




const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);



numberButtons.forEach((button) => {

  button.addEventListener('click', () =>{
      calculator.appendNumber(button.innerHTML)
      calculator.updateDisplay();
  });

})


operationButtons.forEach((button) => {

  button.addEventListener('click', () =>{

      calculator.chooseOperation(button.innerHTML)
      calculator.updateDisplay();
  });

})


equalsButton.addEventListener('click', () =>{

  calculator.compute();
  calculator.updateDisplay();

})



allClearButton.addEventListener('click', () =>{

  calculator.clear();
  calculator.updateDisplay();

})

deleteButton.addEventListener('click', () =>{

  calculator.delete();
  calculator.updateDisplay();

})