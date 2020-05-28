// creating Calculator class with methods

class Calculator {
    constructor(previousOutput, currentOutput) {
        this.previousOutput = previousOutput;
        this.currentOutput = currentOutput;
        this.clear()
    }

    clear() {
        this.previousOutput = '';
        this.currentOutput = ''
        this.operation = ''
    }
}



// DOM elements
const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const equalBtn = document.querySelector('[data-equal]')
const deleteBtn = document.querySelector('[data-delete]')
const clearBtn = document.querySelector('[data-clear]')
const previousOutput = document.querySelector('[data-previous]')
const currentOutput = document.querySelector('[data-current]')

const calculator = new Calculator(previousOutput, currentOutput)