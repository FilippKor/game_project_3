let rockpaperButton = document.querySelector('.prs-computer__button')
let rockButton = document.querySelector('#rock-button')
let paperButton = document.querySelector('#paper-button')
let scissorsButton = document.querySelector('#scissors-button')
let thetext = document.querySelector('.prs__winOrLose')
let randomChoise = Math.floor(Math.random()*3+1)
// 1 is rock 2 is paper 3 is sicssor 

rockButton.addEventListener('click',function(){
    if (randomChoise = 1) {
        thetext.textContent = `Tie bot chose rock`;
    }
    else if (randomChoise = 2) {
        thetext.textContent = `You lose bot chose paper`
    }
    else if (randomChoise = 3) {
        thetext.textContent = `You win bot chose sicssors`
    }
})

paperButton.addEventListener('click',function(){
    if (randomChoise = 1) {
        thetext.textContent = `you win bot chose rock`;
    }
    else if (randomChoise = 2) {
        thetext.textContent = `You tie bot chose paper`
    }
    else if (randomChoise = 3) {
        thetext.textContent = `You lose bot chose sicssors`
    }
})
scissorsButton.addEventListener('click',function(){
    if (randomChoise = 1) {
        thetext.textContent = `you lose bot chose rock`;
    }
    else if (randomChoise = 2) {
        thetext.textContent = `You win bot chose paper`
    }
    else if (randomChoise = 3) {
        thetext.textContent = `You tie bot chose sicssors`
    }
})
rockpaperButton.addEventListener('click',function(){
         randomChoise
})