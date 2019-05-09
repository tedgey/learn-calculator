"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed


// adding click handlers to number buttons

number.forEach(function(number){
    number.addEventListener('click', function(e) {
        let currentString = input.innerHTML;
        let lastCharacter = currentString[currentString.length - 1];
        if (resultDisplayed === false) {
        input.innerHTML += e.target.innerHTML;
    } else if (
        (resultDisplayed === true && lastCharacter === "+") ||
        (resultDisplayed === true && lastCharacter === "-") ||
        (resultDisplayed === true && lastCharacter === "*") ||
        (resultDisplayed === true && lastCharacter === "/")
    )
        {
        resultDisplayed = false;
        input.innerHTML += e.target.innerHTML;
} else {
        resultDisplayed = false;
        input.innerHTML = "";
        input.innerHTML += e.target.innerHTML;
    }
});
});

// adding click handlers to the operation buttons and preventing double operators

operator.forEach(function(operator){
    operator.addEventListener('click', function(e){
        let currentString = input.innerHTML;
        let lastCharacter = currentString[currentString.length - 1];
        if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/") {
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }
    });
});

// on click of 'equal' button

result.addEventListener('click', function(e){
    const currentString = input.innerHTML;
    const numberStringArray = currentString.split(/\+|\-|\×|\÷/g);
    let numbersArray = [];
    numberStringArray.forEach(function(number){
        numbersArray.push(Number(number));
    });
    const operatorsArray = currentString.replace(/[0-9]|\./g, "").split("");

    // we need four while loops to do each math operation
    let multiply = operatorsArray.indexOf("*");
    while (multiply != -1) {
        numbersArray.splice(multiply, 2, numbersArray[multiply] * numbersArray[multiply + 1]);
        operatorsArray.splice(multiply, 1);
        multiply = operatorsArray.indexOf("*");
    }

    let divide = operatorsArray.indexOf("/");
    while (divide != 1) {
        numbersArray.splice(divide, 2, numbersArray[divide] / numbersArray[divide + 1]);
        operatorsArray.splice(divide, 1);
        divide = operatorsArray.indexOf("/");
    }

    let add = operatorsArray.indexOf("+");
    while (add != -1) {
        numbersArray.splice(add, 2, numbersArray[add] + numbersArray[add + 1]);
        operatorsArray.splice(add, 1);
        add = operatorsArray.indexOf("+");
    }

    let subtract = operatorsArray.indexOf("-");
    while (subtract != -1) {
        numbersArray.splice(subtract, 2, numbersArray[subtract] - numbersArray[subtract + 1]);
        operatorsArray.splice(subtract, 1);
        subtract = operatorsArray.indexOf("-");
    }
    console.log(numbersArray);
    resultDisplayed = true;
    input.innerHTML = numbersArray;
});



// clearing the input on press of clear

clear.addEventListener('click', function(){
    input.innerHTML = '';
});
