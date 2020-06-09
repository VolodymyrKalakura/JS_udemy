const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    return parseInt(userInput.value);
}

function wtireToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function createAndWriteOutpu (operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function calculateResult (calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBSTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DEVIDE' ||
        !enteredNumber
        ) {
            return;
        }
    const initalResult = currentResult;
    let matchOperator;
        if (calculationType === 'ADD') {
            matchOperator = '+';
            currentResult += enteredNumber;
        } else if (calculationType === 'SUBSTRACT') {
            matchOperator = '-';
            currentResult -= enteredNumber;
        } else if (calculationType === 'MULTIPLY') {
            matchOperator = '*';
            currentResult *= enteredNumber;
        } else if (calculationType === 'DEVIDE') {
            matchOperator = '/';
            currentResult /= enteredNumber;
        }


    createAndWriteOutpu(matchOperator, initalResult, enteredNumber);
    wtireToLog(calculationType, initalResult, enteredNumber, currentResult);
}


function add() {
    calculateResult('ADD');
}

function substract() {
    calculateResult('SUBSTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DEVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',  substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);