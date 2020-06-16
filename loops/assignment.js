const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

const myArr = [1,3,6,7,13,51,6,5,4,7];
const myArr2 = [1,3,6,7,13,51,6,5,4,7];


const maxValue = 0.7;
const minValue = 0.2;

function checkRandomNumber (number) {
    if(number > maxValue) {
        alert(`number is bigest than ${maxValue}`);
    }
    console.log(number);
}


function goThrough (){
    for (let i = 0; i < myArr.length; i++) {
        console.log(myArr[i]);
    }
}
function goThrough2 (){
    for (const i of myArr) {
        console.log(i);
    }
}

function goThroughReverse() {
    for (let i = myArr.length; i >= 0; i--) {
        console.log(myArr[i]);
    }
}
function checkRandomNumber2(number, number2) {
   if (number > maxValue && number2 > maxValue) {
       alert(`${number} and ${number2} are bigger than ${maxValue}`);
   } else if (number < minValue || number2 < minValue) {
       alert(`${number} or ${number2} someone is small then ${minValue}`);
   }
   console.log(number, number2);
}

// checkRandomNumber(randomNumber);
// goThrough();
// goThrough2();
// goThroughReverse();
checkRandomNumber2(randomNumber, randomNumber2);
