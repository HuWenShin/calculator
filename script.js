const first = "";
const second = "";
const operator = ""; //should i set this to null?
const shouldResetScreen = false;

const opScreen = document.getElementById("upper-screen");
const curScreen = document.getElementById("lower-screen");
const clrBtn = document.getElementById("clr");
const delBtn = document.getElementById("delete");
const ptBtn = document.getElementById("point");

clrBtn.addEventListener("click", clr);
delBtn.addEventListener("click", del);
ptBtn.addEventListener("click", appendPoint);

/*


const equalBtn = document.getElementById("equal");

const numBtn = document.querySelectorAll("[data-number]");
const opBtn = document.querySelectorAll("[data-operator]");





equalBtn.addEventListener("click", operate);


numBtn.forEach(button => button.addEventListener("click", () => appendNumber(this.value)));
opBtn.forEach(button =>button.addEventListener("click", () => setOperation()));

function appendNumber(num) {
    if (curScreen.textContent === "0" || shouldResetScreen === true) resetScreen();
    curScreen.textContent += num;
}

function resetScreen() {
    curScreen.textContent = "";
    shouldResetScreen = false;
}
*/


//display button pressed
const button = document.querySelectorAll("button");
button.forEach(btn => {btn.addEventListener("click", function() {
    appendNumber(this.value);
})});

//append num
function appendNumber(num) {
    if (curScreen === "0" || shouldResetScreen === true) resetScreen();
    curScreen.innerText += num;
}

//append point
function appendPoint() {
    if (shouldResetScreen) resetScreen();
    if (curScreen.innerText === "") curScreen.innerText = "0";
    if (curScreen.innerText.includes(".")) return;
    curScreen.innerText += ".";
}

//reset screen
function resetScreen() {
    curScreen = "0";
    shouldResetScreen = false;
}

//clear screen
function clr() {
    opScreen.innerText = "";
    curScreen.innerText = "";
    first = "";
    second = "";
    operator = "";
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