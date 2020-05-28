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

    delete() {
        this.currentOutput = this.currentOutput.toString().slice(0, -1)
    }

    addNumber(number) {
        if (number === '.' && this.currentOutput.includes('.')) return
        this.currentOutput = this.currentOutput.toString() + number.toString()

    }

    display() {
        this.currentOutputText.innerText = this.currentOutput
        this.previousOutputText.innerText = this.previousOutput;
    }

    selectOperation(operation) {
        if (this.currentOutput === '') return
        this.operation = operation;
        this.previousOutput = this.currentOutput;
        this.currentOutput = ''
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

// creating calculator

const calculator = new Calculator(previousOutputText, currentOutputText)

// EventListener for numbers
numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.display()
    })
})


// EventListener for clear
clearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.display()
})

// EventListener for delete
deleteBtn.addEventListener('click', () => {
    calculator.delete()
    calculator.display()
})

// EventListener for math operators
operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectOperation(button.innerText)
        calculator.display()
    })
})