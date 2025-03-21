const outputScreen = document.querySelector("#outputScreen")
firstNumber = ""
secondNumber = ""
output = ""
operator = ""
dot = false

function sno() {
    if (operator == "**" || operator == "sqr" || operator == "!") {return false} else {return true}
}

function addNumber(number) {
    if (operator == "") {
        firstNumber += number
    } else {
        if (!sno()) {return}
        secondNumber += number
    }
    output += number
    show()
}

function addDot() {
    if (dot) {return}
    if (operator === "") {
        if (firstNumber.length == 0) {
            firstNumber += "0"
            output += "0"
        }
        firstNumber += "."
    } else {
        if (!sno()) {return}
        if (secondNumber.length == 0) {
            secondNumber += "0"
            output += "0"
        }
        secondNumber += "."
    }
    output += "."
    dot = true
    show()
}

function setOperator(op) {
    if (firstNumber.length === 0 && op !== "sqr" || firstNumber.length > 0 && op === "sqr") {return}
    if (operator === "") {
        operator = op
        switch(operator) {
            case "+":
                output += "+"; break
            case "-":
                output += "-"; break
            case "/":
                output += "÷"; break
            case "*":
                output += "×"; break
            case "**":
                output += "²"; break
            case "sqr":
                output += "√"; break
            case "%":
                output += "%"; break
            case "!":
                output += "!"; break
            default:
                break
        }
        dot = false
    }
    show()
}

function del() {
    if (operator === "") {
        if (firstNumber.endsWith(".")) {
            dot = false
        }
        firstNumber = firstNumber.slice(0, -1)
    } else if (operator !== "" && secondNumber.length === 0) {
        operator = ""
    } else {
        if (secondNumber.endsWith(".")) {
            dot = false
        }
        secondNumber = secondNumber.slice(0, -1)
    }
    output = output.slice(0, -1)
    show()
}

function deleteAll() {
    firstNumber = ""
    secondNumber = ""
    output = ""
    operator = ""
    dot = false
    show()
}

function CE() {
    if (secondNumber.length > 0) {
        if (secondNumber.includes(".")) {
            dot = false
        }
        secondNumber = ""
    } else {
        firstNumber = ""
        operator = ""
        dot = false
    }
    show()
}

function equal() {
    if (output.endsWith(".")) {return}
}

function show() {
    outputScreen.innerText = output
}