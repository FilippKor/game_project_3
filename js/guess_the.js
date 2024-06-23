let guessTheNumberInput = document.querySelector('.guess-the-number__input')
let guessTheNumberButton = document.querySelector('.guess-the-number__button')
let guessTheNumberText = document.querySelector('.guess-the-number__text')
let randomNumber = Math.floor(Math.random()*100+1)

guessTheNumberButton.addEventListener('click',function (e) {
    let guessInput=parseInt(guessTheNumberInput.value)
    if (guessInput > randomNumber) {
        guessTheNumberInput.value = ""
        guessTheNumberText.textContent = `the number is less than ${guessInput}`;
        guessTheNumberText.style.color = "#990000";
    }
    else if (guessInput < randomNumber) {
        guessTheNumberInput.value = ""
        guessTheNumberText.textContent = `the number is more than ${guessInput}`;
        guessTheNumberText.style.color = "#990000";
    }
    else if (guessInput == randomNumber) {
        guessTheNumberInput.value = ""
        guessTheNumberText.textContent = `Congratulation! the number is ${randomNumber}`;
        guessTheNumberText.style.color = "#039900";
    }
    else {
        guessTheNumberInput.value = ""
        guessTheNumberText.textContent = `please write a number from 1 to 100`;
        guessTheNumberText.style.color = "#990000";
    }
    guessTheNumberText.style.opacity = "1";
})