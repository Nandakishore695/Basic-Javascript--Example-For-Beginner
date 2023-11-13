//This function for when website side load on input mouse Cursor focus
function setFocusToTextBox() { document.getElementById("firstNumber").focus(); }

//id's selection
const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const outPutSum = document.querySelector("#outPutSum");

//Event Handler
solveTheNumber.addEventListener("click", arithmeticFunction);


function arithmeticFunction() {
    const firstValue = firstNumber.value;
    const secondValue = secondNumber.value;
    if (operatorSymbolValue === "+") {
        outPutSum.innerHTML = parseInt(firstValue) + parseInt(secondValue)
    }
    else if (operatorSymbolValue === "-") {
        outPutSum.innerHTML = parseInt(firstValue) - parseInt(secondValue)
    }
    else if (operatorSymbolValue === "*") {
        outPutSum.innerHTML = parseInt(firstValue) * parseInt(secondValue)
    }
    else if (operatorSymbolValue === "/") {
        outPutSum.innerHTML = parseInt(firstValue) / parseInt(secondValue)
    }
}

//This is for arithmetic operator
let operatorSymbolValue = '';
function operatorHandler(symbol) {
    operatorSymbolValue = symbol;
}

//Number values getting
function numberValues(type) {
    if (!operatorSymbolValue) {
        firstNumber.value += type;
    }
    else if (operatorSymbolValue) {
        secondNumber.value += type;
    }
}
