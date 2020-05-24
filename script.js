const calculator = document.querySelector('.calculator')
const output = calculator.querySelector('.calculator__output')
const inputs = calculator.querySelector('.calculator__input')

inputs.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const input = e.target
        const action = input.dataset.action
        const inputContent = input.textContent
        const outputNum = output.textContent

        if (!action) {
            if (outputNum === '0') {
                output.textContent = inputContent
            } else {
                output.textContent = outputNum + inputContent
            }
        }

        if (action === 'decimal') {

            const d = outputNum.toString();
            if (!d.includes('.'))
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

        if (action === 'minus') {
            if (outputNum === '0') {
                output.textContent = '-'
            } else {
                output.textContent = outputNum + '-'
            }
        }
        if (action === 'plus' && outputNum !== '0') {
            output.textContent = outputNum + '+'
        }
        if (action === 'multiply' && outputNum !== '0') {
            output.textContent = outputNum + '*'
        }
        if (action === 'divide' && outputNum !== '0') {
            output.textContent = outputNum + '/'
        }
        // if (!action) {
        //     if (displayedNum === '0') {

        //         display.textContent = keyContent;

        //     } else {

        //         display.textContent = displayedNum + keyContent;
        //     }
        // }

        // if (
        //     action === 'multiply' ||
        //     action === 'divide' ||
        //     action === 'minus' ||
        //     action === 'plus' ||
        //     action === 'multiply' ||
        //     action === 'percent' ||
        //     action === 'plus-min') {
        //     console.log('math')
        // }
        // if (action === 'decimal') {
        //     console.log('decimal')
        // }
        // if (action === 'equal') {
        //     console.log('equal')
        // }
        // if (action === 'clear') {
        //     console.log('clear')
        // }
        // if (action === 'delete') {
        //     console.log('delete')}
    }
})
