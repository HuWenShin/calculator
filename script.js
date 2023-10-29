const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const first = "";
const second = "";
const operator = "";

const operate = function(a, b, op) {
    if (op === "+") {
        add(a, b);
    } else if (op === "-") {
        subtract(a, b);
    } else if (op === "*") {
        multiply(a, b);
    } else if (op === "/") {
        divide(a, b);
    }
}