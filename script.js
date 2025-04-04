const outputScreen = document.querySelector("#outputScreen")
firstNumber = ""
secondNumber = ""
output = ""
operator = ""
dot = false

function sno() {
    if (operator == "**" || operator == "!") {return false} else {return true}
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
        output = firstNumber + operator
    } else {
        firstNumber = ""
        operator = ""
        dot = false
        output = ""
    }
    show()
}

function swap() {
    if (operator === "") {
        firstNumber = (parseFloat(firstNumber) * -1).toString();
    } else {
        secondNumber = (parseFloat(secondNumber) * -1).toString();
    }
    output = firstNumber + operator + secondNumber;
    show();
}

function fatorial(number) {
    number = parseFloat(number)
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * fatorial(number - 1);
}

function equal() {
    if (output.endsWith(".")) {return}
    if (sno() && secondNumber.length === 0) {return}
    if (operator === "") {return}
    const n1 = parseFloat(firstNumber)
    const n2 = parseFloat(secondNumber)
    let result;
    switch (operator) {
        case "sqr":
            result = Math.sqrt(n2); break
        case "!":
            result = fatorial(n1); break
        case "**":
            result = Math.pow(n1, 2); break
        case "%":
            result = n1 * n2 / 100; break
        case "+":
            result = n1 + n2; break
        case "-":
            result = n1 - n2; break
        case "*":
            result = n1 * n2; break
        case "/":
            result = n1 / n2; break
        default:
            break
    }
    firstNumber = String(result)
    output = String(result)
    secondNumber = ""
    operator = ""
    show()
}

function show() {
    outputScreen.innerText = output
}

document.addEventListener("keydown", (event) => {
    if (event.key === "1") {
        addNumber(1)
    } else if (event.key === "2") {
        addNumber(2)
    } else if (event.key === "3") {
        addNumber(3)
    } else if (event.key === "4") {
        addNumber(4)
    } else if (event.key === "5") {
        addNumber(5)
    } else if (event.key === "6") {
        addNumber(6)
    } else if (event.key === "7") {
        addNumber(7)
    } else if (event.key === "8") {
        addNumber(8)
    } else if (event.key === "9") {
        addNumber(9)
    } else if (event.key === "0") {
        addNumber(0)
    } else if (event.key === ".") {
        addDot()
    } else if (event.key === "+") {
        setOperator("+")
    } else if (event.key === "-") {
        setOperator("-")
    } else if (event.key === "*") {
        setOperator("*")
    } else if (event.key === "/") {
        setOperator("/")
    } else if (event.key === "=" || event.key === "Enter") {
        equal()
    } else if (event.key === "Backspace") {
        del()
    } else if (event.key === "c" || event.key === "C") {
        deleteAll()
    } else if (event.key === "%") {
        setOperator("%")
    } else if (event.key === "s" || event.key === "S") {
        setOperator("sqr")
    } else if (event.key === "!") {
        setOperator("!")
    } else if (event.key === "Escape") {
        CE()
    } else if (event.key === "=") {
        equal()
    }
})