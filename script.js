// Declare variables below to save the different divs of your story.

// Screen 1
let optionOneBtn = document.querySelector('.option-one');
let optionOneScreen = document.querySelector('.option-one-screen');
let opening = document.querySelector('.opening-screen');

// Screen 2
let optionTwoBtn = document.querySelector('.option-two');
let optionTwoScreen = document.querySelector('.option-one-end');
let optionFourBtn = document.querySelector('.option-four');
let optionFourScreen = document.querySelector('.option-four-end');

let optionFiveBtn = document.querySelector('.option-five');
let optionFiiveScreen = document.querySelector('.option-five-end');
// screen 3
let optionThreeBtn = document.querySelector('.option-three');
let optionThreeScreen = document.querySelector('.option-two-end');




// - Then fill in the blanks with the correct variables.


optionOneBtn.addEventListener('click', function () {
    opening.style.display = "none";
    optionOneScreen.style.display = "block";
});

optionTwoBtn.addEventListener('click', function () {
    optionOneScreen.style.display = "none";
    optionTwoScreen.style.display = "block";
});

// INSERT_VARIABLE.addEventListener('click', function(){
optionThreeBtn.addEventListener('click', function () {
    optionOneScreen.style.display = "none";
    optionThreeScreen.style.display = "block";

});
optionFourBtn.addEventListener('click', function () {
optionTwoScreen.style.display = "none";
optionFourScreen.style.display = "block";
});

optionFiveBtn.addEventListener('click', function () {
    optionTwoScreen.style.display = "none";
    optionFiiveScreen.style.display = "block";
});
// });

// INSERT_VARIABLE.addEventListener('click', function(){



// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });