var button = document.querySelectorAll('.button');
var calculator = document.querySelector('.calculator');
var display = document.querySelector('.display');
var operator;
// var allOperators = ['+','-','x','/']
var isEvaluated = false;
calculator.addEventListener('click', function(event) {
  if (isEvaluated === true) {
    display.textContent = "";
    isEvaluated = false;
  }
  var clickValue = event.target.value;
  console.log(clickValue);
  if (clickValue === '=') {
    operation = display.textContent;
    display.textContent = "";
    display.textContent = eval(operation)
    isEvaluated = true;
    // calculate(display.textContent,operator)
  // } else if (allOperators.indexOf(clickValue) != -1) {
  //   operator = clickValue;
  //   display.textContent += clickValue;
  } else if (clickValue ==='C') {
    display.textContent = '';
  } else {
    display.textContent += clickValue;
  }
});

// function calculate(operation, operator) {
//   console.log(eval(operation));
//   var num1;
//   var num2;
//   display.textContent = '';
//   if (operator === 'x') {
//     num1 = operation.split('x')[0];
//     num2 = operation.split('x')[1];
//     var result = num1 * num2;
//   } else if (operator === "-") {
//     num1 = operation.split('-')[0];
//     num2 = operation.split('-')[1];
//     var result = num1 - num2;
//   } else if (operator === '+') {
//     num1 = Number(operation.split('+')[0]);
//     num2 = Number(operation.split('+')[1]);
//     var result = num1 + num2;
//   } else {
//     num1 = operation.split('/')[0];
//     num2 = operation.split('/')[1];
//     var result = num1 / num2;
//   }
//   display.textContent = result;
//
// }
