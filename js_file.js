const add = function (num1, num2) {
    return num1 + num2;
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1*num2;
}

const divide = function (num1, num2) {
    return num1/num2;
}

const power = function (num1, num2) {
    return num1**num2;
}

const operate = function (num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === 'x') {
        return multiply(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2)
    } else if (operator === 'pow') {
        return power(num1, num2)
    } else {
        return "Error unrecognised operator."
    }
}

let displayValue = '';
let displayPrevious = '';
let lastValue = '';
let operatorValue = '';

const createGrid = function () {
    let container = document.querySelector('.buttonContainer');  
    let operatorsGrid = ['+', '-', 'x', '/'];
    let extras = ['pow', 'C', 'del', '+/-', '0', '.', '='];
    let j = 1;
    for (let i = 1; i <= 20; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        if (i <= 4) {
            square.textContent = operatorsGrid.shift();
        } else if ((i <= 16) && (i%4 !== 0)) {
            square.textContent = `${j}`;
            j += 1;
        } else {
            square.textContent = extras.shift();
        }
        square.addEventListener('click', buttonClick)
        container.appendChild(square);
    }
}

const buttonClick = function () {
    let operatorsClick = ['+', '-', 'x', '/', 'pow'];
    if (isNaN(Number(this.textContent)) !== true) {
        if (displayValue === '') {
            displayValue = this.textContent;
            lastValue = 'number'
        } else if (lastValue === 'number') {
            displayValue = displayValue + this.textContent;
        } else if (lastValue === 'operator') {
            displayPrevious = displayValue;
            displayValue = this.textContent;
            lastValue = 'number';
        }
    } else if (operatorsClick.some(operator => operator === this.textContent)) {
        if (displayValue !== '' && displayPrevious !== '' && operatorValue !== '' && lastValue === 'number') {
            displayValue = operate(Number(displayPrevious), Number(displayValue), operatorValue)
        }
        operatorValue = this.textContent;
        lastValue = 'operator'
    } else if (this.textContent === '=') {
        if (lastValue == 'number') {
            displayValue = operate(Number(displayPrevious), Number(displayValue), operatorValue);
            lastValue = 'equal';
        }
    } else if (this.textContent = 'C') {
        displayValue = '';
        displayPrevious = '';
        lastValue = '';
        operatorValue = '';
    }
    let display = document.querySelector('.screen');
    display.textContent = displayValue;
    }

createGrid();

