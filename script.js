const resultDisplay = document.getElementById("result-display");
const operandDisplay = document.getElementById("operand-display");

const input = document.querySelector("input");

const btnC = document.querySelector("#button0");
const btn0 = document.querySelector("#button1");
const btndel = document.querySelector("#button2");
const btn1 = document.querySelector("#button3");
const btn2 = document.querySelector("#button4");
const btn3 = document.querySelector("#button5");
const btn4 = document.querySelector("#button6");
const btn5 = document.querySelector("#button7");
const btn6 = document.querySelector("#button8");
const btn7 = document.querySelector("#button9");
const btn8 = document.querySelector("#button10");
const btn9 = document.querySelector("#button11");

const btneql = document.querySelector("#button12");
const btndiv = document.querySelector("#button13");
const btnmult = document.querySelector("#button14");
const btnsub = document.querySelector("#button15");
const btnadd = document.querySelector("#button16");

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", buttonPress(btn));
});

function buttonPress(btn) {
    let buttonType = btn.className;
    if (buttonType == "digit"){
        operandDisplay.textContent += btn.textContent;
    }
}

input.addEventListener("input", updateValue);

function updateValue(e) {
  operandDisplay.textContent = e.target.value;
}