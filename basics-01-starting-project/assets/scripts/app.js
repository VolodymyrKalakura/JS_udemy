const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutpu (operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutpu('+', initalResult, enteredNumber);
}

function substract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutpu('-', initalResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutpu('*', initalResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutpu('/', initalResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',  substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);