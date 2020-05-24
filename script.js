const calculator = document.querySelector('.calculator')
const output = calculator.querySelector('.calculator__output')
const inputs = calculator.querySelector('.calculator__input')
const previousOutput = calculator.querySelector('.calculator__prev-output')
const calculate = (number1, operator, number2) => {
    let result = ''


    if (operator === 'plus') {

        result = number1 + number2;
    }
    if (operator === 'minus') {

        result = number1 - number2;
    }
    if (operator === 'multiply') {

        result = number1 * number2;
    }
    if (operator === 'divide') {

        result = number1 / number2;
    }
    if (operator === 'percent') {

        result = number1 * 100;
    }

    return result
}


inputs.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const input = e.target
        const action = input.dataset.action
        const inputContent = input.textContent
        const outputNum = output.textContent
        const previous = output.textContent.toString().slice(-1);
        console.log(previous)
        if (!action) {
            if (outputNum === '0') {
                output.textContent = inputContent
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
            previousOutput = outputNum;
            // calculator.dataset.previousInput = 'operator';
            // const previousInput = calculator.dataset.previousInput;
            // calculator.dataset.operator = action;

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

        if (action === 'equal') {


            output.textContent = calculate(number1, operator, number2)
        }

    }
})
