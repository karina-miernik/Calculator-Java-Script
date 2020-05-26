const calculator = document.querySelector('.calculator')
const output = calculator.querySelector('.calculator__output')
const inputs = calculator.querySelector('.calculator__input')
const previousOutput = calculator.querySelector('.calculator__prev-output')


const calculate = (number1, operator, number2) => {

    let result = ''

    if (operator === 'plus') {

        result = parseFloat(number1) + parseFloat(number2);
    }
    else if (operator === 'minus') {

        result = parseFloat(number1) - parseFloat(number2);
    }
    else if (operator === 'multiply') {

        result = parseFloat(number1) * parseFloat(number2);
    }
    else if (operator === 'divide' && parseFloat(number2) !== 0) {

        result = parseFloat(number1) / parseFloat(number2);
    }
    else if (operator === 'percent') {

        result = parseFloat(number1) * 100;
    }

    return result
}


inputs.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const input = e.target
        const action = input.dataset.action
        const inputContent = input.textContent

        const outputNum = output.textContent
        const previous = output.textContent.toString().slice(-1);

        const previousInputType = calculator.dataset.previousInputType;

        if (!action) {
            if (outputNum === '0' || previousInputType === 'operator') {
                output.textContent = inputContent;
            } else {
                output.textContent = outputNum + inputContent
            }
        }

        if (
            action === 'plus' ||
            action === 'minus' ||
            action === 'multiply' ||
            action === 'divide' ||
            action === 'percent'
        ) {
            calculator.dataset.previousInputType = 'operator'
            calculator.dataset.number1 = outputNum
            calculator.dataset.operator = action

        }
        if (action === 'decimal' && previous !== '.') {
            output.textContent = outputNum + '.'
        }

        if (action === 'clear') {
            output.textContent = '0'
        }

        if (action === 'delete') {
            const s = outputNum.toString();
            const deletedOutput = s.slice(0, -1)
            output.textContent = deletedOutput;


        }
        if (action === 'percent') {

            if (outputNum === '0') {
                output.textContent = '%'
            } else {
                output.textContent = '%' + outputNum
            }
        }
        if (action === 'plusmin') {
            if (outputNum === '0') {
                output.textContent = '-'
            }
            else {

                // poprawić później
                output.textContent = outputNum * -1;
            }
        }

        if (action === 'minus' && previous !== '-') {
            if (outputNum === '0') {
                output.textContent = '-'
            } else {
                output.textContent = outputNum + '-'
            }
        }
        if (action === 'plus' && previous !== '+') {
            output.textContent = outputNum + '+'
        }
        if (action === 'multiply' && previous !== '*') {
            output.textContent = outputNum + '*'
        }
        if (action === 'divide' && previous !== '/') {
            output.textContent = outputNum + '/'
        }

        if (action === 'calculate') {
            const number1 = calculator.dataset.number1
            const operator = calculator.dataset.operator
            const number2 = outputNum

            output.textContent = calculate(number1, operator, number2)
        }

    }
})


