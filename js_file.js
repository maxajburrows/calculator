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

const operate = function (num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === '*') {
        return multiply(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2)
    } else {
        return "Error unrecognised operator."
    }
}

const createGrid = function () {
    let container = document.querySelector('.buttonContainer');  
    let operators = ['+', '-', 'x', '/'];
    let extras = ['pow', 'C', 'del', '+/-', '0', '.', '='];
    let j = 1;
    for (let i = 1; i <= 20; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        if (i <= 4) {
            square.textContent = operators.shift();
        } else if ((i <= 16) && (i%4 !== 0)) {
            square.textContent = `${j}`;
            j += 1;
        } else {
            square.textContent = extras.shift();
        }
        container.appendChild(square);
    }
}

createGrid();