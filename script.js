const calculator = document.querySelector('.calculator')
const output = calculator.querySelector('.calculator__output')
const inputs = calculator.querySelector('.calculator__input')


inputs.addEventListener('click', e => {
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
        //     console.log('delete')
        // }
    }
})

