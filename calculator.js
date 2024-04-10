const operation = document.getElementById('operation');
const result = document.querySelector('#result');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equal = document.getElementById('equal');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');

let n1, n2;

equal.addEventListener('click', () => {
    
    let operator = Array.from(factors).find((sign) => { if (sign === '+') {
        n1 = parseFloat(factors.split('+')[0]);
        n2 = parseFloat(factors.split('+')[1]);
        result.value = add(n1, n2);
    } else if (sign === '-') {
        let n1 = parseFloat(factors.split('-')[0]);
        let n2 = parseFloat(factors.split('-')[1]);
        result.value = subtract(n1, n2);
    } else if (sign === '*') {
        let n1 = parseFloat(factors.split('*')[0]);
        let n2 = parseFloat(factors.split('*')[1]);
        result.value = multiply(n1, n2);
    } else if (sign === '/') {
        let n1 = parseFloat(factors.split('/')[0]);
        let n2 = parseFloat(factors.split('/')[1]);
        result.value = divide(n1, n2);
    }
    });
});

// Add number to the input

let factors = '';

function addNUmber(text) {
    factors = factors.toString() + text.toString();
    result.value = factors;
    operation.value = result.value;
};

number.forEach(num => {
    num.addEventListener('click', () => {addNUmber(num.innerHTML)});
});

// Add operator to the input

function addOperator(sign) {
    factors = factors.toString() + sign.toString();
    result.value = factors;
    operation.value = result.value;
}

operator.forEach(sign => {
    sign.addEventListener('click', () => {addOperator(sign.innerHTML)});
});

function add(n1, n2) {
    return n1 + n2
};

function subtract(n1, n2) {
    return n1 - n2
};

function multiply(n1, n2) {
    return n1 * n2
};

function divide(n1, n2) {
    if (n2 !== 0) {
        return n1 / n2
    } else {
        return "Can't divide by 0"
    }

};

clear.addEventListener('click', () => {
    result.value = 0;
    operation.value = 0;
    n1 = 0;
    n2 = 0;
    factors = '';
});

back.addEventListener('click', () => {
    factors = factors.toString().slice(0, -1);
    result.value = factors;
    operation.value = result.value;
});