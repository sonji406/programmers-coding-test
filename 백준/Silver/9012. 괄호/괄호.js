const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    for (let i = 1; i < input.length; i++) {
        const ps = input[i];
        const stack = [];
        let isValid = true;

        for (const char of ps) {
            if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
                if (stack.length === 0) {
                    isValid = false;
                    break;
                } else {
                    stack.pop();
                }
            }
        }

        if (stack.length !== 0) isValid = false;

        console.log(isValid ? 'YES' : 'NO');
    }
});
