const history = document.querySelector('.history-value')
const outputValue = document.querySelector('.output-value')
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");


function getHistory() {
    return history.innerText;
}

function printHistory(num) {
    history.innerText = num;
}

function getOutput() {
    return outputValue.innerText;
}
function printOutput(num) {
    if (num == "") {
        outputValue.innerText = num;
    }
    else {
        outputValue.innerText = Number(num);
    }
}

function reverseNumberFormat(num) {
    return Number(num);
}


//accessing operators one by one
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id === "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "delete") {
            let output = getOutput().toString();
            if (output) {//if output has a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }

            else if (this.id == "plus-min") {
                let output = getOutput().toString();
                if (output) {//if output has a value
                    output = output.substr(0, output.length - 1);
                    printOutput(output);
                }
            }
            else {
                let output = getOutput();
                let history = getHistory();
                if (output == "" && history != "") {
                    if (isNaN(history[history.length - 1])) {
                        history = history.substr(0, history.length - 1);
                    }
                }
                if (output != "" || history != "") {
                    output = output === "" ? output : getOutput(output);//reverseNumberFormat(output)
                    history = history + output;
                    if (this.id == "=") {
                        let result = eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    else {
                        history = history + this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }

        });
}
// accessing numbers by clicking
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let output = getOutput(); //reverseNumberFormat(getOutput());
        if (output != NaN) { //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}