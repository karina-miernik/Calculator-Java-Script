// creating Calculator class with methods

class Calculator {
    constructor(previousOutputText, currentOutputText) {
        this.previousOutputText = previousOutputText;
        this.currentOutputText = currentOutputText;
    }

    addNumber(number) {
        this.currentOutput = number
    }

    display() {
        this.currentOutputText.innerText = this.currentOutput
    }

}



// DOM elements
const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const equalBtn = document.querySelector('[data-equal]')
const deleteBtn = document.querySelector('[data-delete]')
const clearBtn = document.querySelector('[data-clear]')
const previousOutputText = document.querySelector('[data-previous]')
const currentOutputText = document.querySelector('[data-current]')

const calculator = new Calculator(previousOutputText, currentOutputText)

// EventListener for numbers

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.display()
    })
})