let first = "";
let second = "";
let operator = null; //should i set this to null?
let shouldResetScreen = false;

const opScreen = document.getElementById("upper-screen");
const curScreen = document.getElementById("lower-screen");
const numBtn = document.querySelectorAll("[data-number]");
const opBtn = document.querySelectorAll("[data-operator]");
const clrBtn = document.getElementById("clr");
const delBtn = document.getElementById("delete");
const ptBtn = document.getElementById("point");
const equalBtn = document.getElementById("equal");

clrBtn.addEventListener("click", clr);
delBtn.addEventListener("click", del);
ptBtn.addEventListener("click", appendPoint);
equalBtn.addEventListener("click", evaluate);
numBtn.forEach(btn => btn.addEventListener("click", function() {appendNumber(btn.textContent)}));
opBtn.forEach(btn => btn.addEventListener("click", function() {setOperation(btn.textContent)}));

//append num
function appendNumber(num) {
    if (curScreen.innerText === "0" || shouldResetScreen === true) resetScreen();
    curScreen.innerText += num;
}

//append point
function appendPoint() {
    if (shouldResetScreen) resetScreen();
    if (curScreen.innerText === "") curScreen.innerText = "0";
    if (curScreen.innerText.includes(".")) return;
    curScreen.innerText += ".";
}

//set operation when operator is chosen
function setOperation(op) {
    if (op !== null) evaluate();
    first = curScreen.innerText;
    operator = op
    opScreen.innerText = `${first} ${operator}`;
    shouldResetScreen = true;
}

//
function evaluate() {
    if (operator === null || shouldResetScreen === true) return;
    if (operator === "÷" && curScreen.innerText === "0") {
        alert("You can't divide by 0");
        return;
    }
    second = curScreen.innerText;
    result = operate(first, second, operator);
    opScreen.innerText = `${first} ${operator} ${second}`
    curScreen.innerText = result;
    operator = null;
    shouldResetScreen = true;
}

//reset screen
function resetScreen() {
    curScreen.innerText = "";
    shouldResetScreen = false;
}

//clear screen
function clr() {
    opScreen.innerText = "";
    curScreen.innerText = "";
    first = "";
    second = "";
    operator = null;
}

//remove last character from string
function del() {
    curScreen.innerText = curScreen.innerText.slice(0, -1);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    a = Number(a);
    b = Number(b);
    switch(op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "÷":
            return divide(a, b);
        case "×":
            return multiply(a, b);
    }
}