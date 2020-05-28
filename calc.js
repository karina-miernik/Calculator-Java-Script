// creating Calculator class with methods

class Calculator {
    constructor(previousOutputText, currentOutputText) {
        this.previousOutputText = previousOutputText;
        this.currentOutputText = currentOutputText;
        this.clear()
    }
    clear() {
        this.currentOutput = '';
        this.previousOutput = '';
        this.operation = undefined
    }
    addNumber(number) {
        this.currentOutput = this.currentOutput.toString() + number.toString()
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