const equalButton = document.querySelector('#equals')


equalButton.addEventListener('click', function () {
    let firstInput = document.querySelector('#first-input').value * 1
    let secondInput = document.querySelector('#second-input').value * 1
    const plusButton = document.querySelector('#plus')
    const minusButton = document.querySelector('#minus')
    const multiplyButton = document.querySelector('#multiply')
    const divideButton = document.querySelector('#division')
    let theResult = document.querySelector('#result-p')

    plusButton.addEventListener('click',function (){
        theResult.textContent = firstInput + secondInput
    })
    minusButton.addEventListener('click',function (){
        theResult.textContent = firstInput - secondInput
    })
    multiplyButton.addEventListener('click',function (){
        theResult.textContent = firstInput * secondInput
    })
    divideButton.addEventListener('click',function (){
        theResult.textContent = firstInput / secondInput
    })
})