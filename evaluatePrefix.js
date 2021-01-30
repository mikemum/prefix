function calculate(op, num1, num2) {
    num1 = +num1;
    num2 = +num2;
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2;
    }
}

function isOperator(val) {
    let ops = '+-*/';
    return ops.includes(val);
}

function evaluatePrefixNotation(input) {
    input = input.trim().split(' ');
    let n = input.length;

    if (n === 1) return input[0];

    let i = 0;
    let newString = '';

    while (i < n - 1) {
        let current = input[i];
        let next = input[i + 1];
        if (isOperator(current) && isOperator(next)) {
            newString += current + ' ';
            input[i] = undefined;
            i++;
        } else if (isOperator(current) && !isOperator(next)) {
            let result = calculate(current, next, input[i + 2]);
            newString += result + ' ';
            input[i] = undefined;
            input[i + 1] = undefined;
            input[i + 2] = undefined;
            i += 3;
        }

    }
    if (input[n - 1]) newString += input[n - 1];
    return evaluatePrefixNotation(newString);
}

let input = "+ + 12 16 * 10 4";
// let input = "+ 1 2"; 
// let input = "+ + 1 2 30"; 
// let input = "9"; 
let result = +evaluatePrefixNotation(input);
console.log(result);