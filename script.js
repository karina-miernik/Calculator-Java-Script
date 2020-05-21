
const calculator = document.querySelector('.calc')
const calcInput = calculator.querySelector('.calc__input')
const output = calculator.querySelector('.calc__output')




calcInput.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const value = e.target;
        const action = value.dataset.action;
        const inputContent = value.textContent;
        const outputContent = output.textContent;
        if (!action) {
            if (outputContent === '0') {

                output.textContent = inputContent;
            } else {

                output.textContent += inputContent;
            }
        }

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

