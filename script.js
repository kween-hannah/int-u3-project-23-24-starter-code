// Save each screen and button using querySelector.
const opening = document.querySelector(".opening-screen");
const optionOneScreen = document.querySelector(".option-one-screen");
const optionTwoScreen = document.querySelector(".option-two-screen");
const optionOneEnd = document.querySelector(".option-one-end");
const optionTwoEnd = document.querySelector(".option-two-end");
const optionFourEnd = document.querySelector(".option-four-end");
const optionFiveEnd = document.querySelector(".option-five-end");

const focusClassesBtn = document.querySelector(".opening-screen .option-one");
const spendTimeFriendsBtn = document.querySelector(".opening-screen .option-two");
const studyBtn = document.querySelector(".study-btn");
const partyWeekendBtn = document.querySelector(".party-weekend-btn");
const goPartyBtn = document.querySelector(".option-four");
const finishProjectBtn = document.querySelector(".option-five");

function showScreen(screenToShow) {
    const screens = [
        opening,
        optionOneScreen,
        optionTwoScreen,
        optionOneEnd,
        optionTwoEnd,
        optionFourEnd,
        optionFiveEnd,
    ];

    screens.forEach((screen) => {
        screen.style.display = "none";
    });

    screenToShow.style.display = "block";
}

focusClassesBtn.addEventListener("click", function () {
    showScreen(optionOneScreen);
});

spendTimeFriendsBtn.addEventListener("click", function () {
    showScreen(optionTwoScreen);
});

studyBtn.addEventListener("click", function () {
    showScreen(optionOneEnd);
});

partyWeekendBtn.addEventListener("click", function () {
    showScreen(optionTwoEnd);
});

goPartyBtn.addEventListener("click", function () {
    showScreen(optionFourEnd);
});

finishProjectBtn.addEventListener("click", function () {
    showScreen(optionFiveEnd);
});
