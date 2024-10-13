let num1 = '';
let num2 = '';
let operator = '';
let operationStart = false;

function buttonEventListener() {
    const buttonsNumber = document.querySelectorAll('.buttons-number');
    const output = document.querySelector('.output');
    for (let i = 0; i < buttonsNumber.length; i++) {
        buttonsNumber[i].addEventListener ('click', function() {
            if (
                output.textContent == '÷' || output.textContent == '×' || 
                output.textContent == '-' || output.textContent == '+' || 
                output.textContent == '='
            ) {
                    output.textContent = '';
            }
            output.textContent += buttonsNumber[i].textContent;
        });
    }
}

function functionEventListener() {
    const buttonsFunction = document.querySelectorAll('.buttons-function');
    const output = document.querySelector('.output');
    const equal = document.getElementById('buttons-function-=');

    for (let i = 0; i < buttonsFunction.length; i++) {
        buttonsFunction[i].addEventListener ('click', function() {
            if (operationStart == false) {
                num1 = output.textContent;
            } 
            else if (num1 != output.textContent && Number.isNaN(parseInt(output.textContent)) == false) {
                num1 = output.textContent;
            }
            else if (Number.isNaN(parseInt(output.textContent))) {
                operator = output.textContent;
            }
            else if (num1 != '' && operator != '' && parseInt(output.textContent) == true) {
                console.log("special");
                num1 = operate(num1, num2);
                num2 = '';
                operator = buttonsFunction[i].textContent;
            }
            else if (operateStart){
                num2 = output.textContent;
            }
            operator = buttonsFunction[i].textContent;
            output.textContent = buttonsFunction[i].textContent;
            operationStart = true;
            console.log(`${num1} ${operator} ${num2}`);
        });
    }
}

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}


function operate() {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '×':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        default:
            console.log("ERROR");
    }
}

function equalEventListener() {
    const equal = document.getElementById('buttons-function-=');
    const output = document.querySelector('.output');

    equal.addEventListener('click', function() {
        if (!Number.isNaN(parseInt(output.textContent))) {
            num2 = output.textContent;
        }
        else {
            console.log('ERROR')
            return 1;
        }
        operated = operate();
        output.textContent = operated;
        num1 = operated;
        num2 = '';
    });
}

function cEventListener() {
    const c = document.getElementById('buttons-function-C');
    const output = document.querySelector('.output');

    c.addEventListener('click', function() {
        num1 = '';
        num2 = '';
        operator = '';
        operationStart = false;
        output.textContent = '';
    });
}

buttonEventListener();
functionEventListener();
equalEventListener();
cEventListener();