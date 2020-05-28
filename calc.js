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
        if (this.operation != null) {
            this.previousOutputText.innerText = `${this.previousOutput} ${this.operation}`
        }
    }

    selectOperation(operation) {
        if (this.currentOutput === '') return
        if (this.previousOutput !== '') {
            this.calc()
        }
        this.operation = operation;
        this.previousOutput = this.currentOutput;
        this.currentOutput = ''
    }

    calc() {
        let result;
        const previous = parseFloat(this.previousOutput)
        const current = parseFloat(this.currentOutput)
        if (isNaN(previous) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                result = previous + current;
                break
            case '-':
                result = previous - current;
                break
            case '*':
                result = previous * current;
                break
            case '÷':
                result = previous / current;
                break
            case '%':
                result = previous * 0.01
                break
            default:
                return;
        }


        this.currentOutput = result;
        this.operation = undefined
        this.previousOutput = '';
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
clearBtn.addEventListener('click', button => {
    calculator.clear()
    calculator.display()
})

// EventListener for delete
deleteBtn.addEventListener('click', button => {
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

// EventListener for equal button
equalBtn.addEventListener('click', button => {
    calculator.calc()
    calculator.display()
})