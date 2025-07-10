const resultDisplay = document.getElementById("result-display");
const operandDisplay = document.getElementById("operand-display");
resultDisplay.textContent = "";
let operatorCounter = 0;
let operator = null;
let firstNumber = null;
let secondNumber = null;
let result = "";

const input = document.querySelector("input");

const buttons = document.querySelectorAll("button");
const decimalButton = document.getElementById("buttondec");

buttons.forEach(btn => {
    btn.addEventListener("click", buttonPress);
});

function buttonPress(e) {
    let button = e.target;
    if (button.id == "button0"){
        resetAll();
    }
    else if (button.id == "button2"){
        let str = operandDisplay.textContent;
        if (str != "0"){
            if (str.length > 1){
                str = str.substring(0, str.length - 1);
            }
            else str = "0";
        }
        operandDisplay.textContent = str;
    }
    else if (result != ""){
        if (button.className == "digit"){
            resetBackend();
            if (button.id == "buttondec") operandDisplay.textContent = "0.";
            else operandDisplay.textContent = button.textContent; 
        }
        else if (button.className == "operator"){
            result = ""
            operandDisplay.textContent = resultDisplay.textContent;
            operatorCounter--;
            operatorHandler(e);
        }
    }
    //equal btn
    else if (button.id == "button12"){
        equalHandler(e);
    }
    else if (operandDisplay.textContent == "0"){
        if (button.className == "digit"){
            if (button.id == "buttondec") operandDisplay.textContent += button.textContent; 
            else operandDisplay.textContent = button.textContent; 
        }
        if (button.className == "operator"){
            operatorHandler(e);
        }
    }
    else if (button.className == "digit"){
        operandDisplay.textContent += button.textContent; 
    }
    else if (button.className == "operator"){
        operatorHandler(e);
    }
    decimalChecker();
}

function resetAll(){
    operandDisplay.textContent = "0";
    resultDisplay.textContent = "";
    operatorCounter = 0;
    operator = null;
    firstNumber = null;
    secondNumber = null;
    result = ""
}

function resetBackend(){
    operatorCounter = 0;
    operator = null;
    firstNumber = null;
    secondNumber = null;
    result = ""
}

function equalHandler(e){
    if (operatorCounter == 0){
        result = operandDisplay.textContent;
    }
    else {
        let equation = operandDisplay.textContent.split(operator)
        firstNumber = Number(equation[0]);
        secondNumber = Number(equation[1]);

        switch (operator){
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "x":
                result = firstNumber * secondNumber;
                break;
            case "/":
                if (secondNumber == 0){
                    alert("cannot divide by 0")
                    result = "0"
                }
                else result = firstNumber / secondNumber;
                break;
        }
    }
    resultDisplay.textContent = result;
}

function operatorHandler(e) {
    let button = e.target;
    if (operatorCounter >= 1){
        alert("only allowed 1 operator");
        return false;
    }
    else {
        operatorCounter++;
        firstNumber = Number(operandDisplay.textContent);
        operandDisplay.textContent += button.textContent;
        operator = button.textContent;
    }
}

function decimalChecker(){
    decimalButton.disabled = false;
    if (operatorCounter > 0){
        let equation = operandDisplay.textContent.split(operator);
        if (equation[1].includes(".")) decimalButton.disabled = true;
    }
    else if (operatorCounter == 0){
        if (operandDisplay.textContent.includes(".")) decimalButton.disabled = true;
    }
}

// input.addEventListener("input", updateValue);

// function updateValue(e) {
//   operandDisplay.textContent = e.target.value;
// }