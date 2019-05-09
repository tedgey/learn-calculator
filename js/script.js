"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed
    // currentString = input.innerHTML,
    // lastCharacter = currentString[currentString.length - 1];

// adding click handlers to number buttons

number.forEach(function(number){
    number.addEventListener('click', function(e) {
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

result.addEventListener('click', function(){
    // input.innerHTML = ;
});

// .split(/\+|\-|\×|\÷/g);

// clearing the input on press of clear

clear.addEventListener('click', function(){
    input.innerHTML = '';
});
