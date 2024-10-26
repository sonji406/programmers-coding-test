const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const result = [];
    const logs = [];

    for (let i = 1; i < input.length; i++) {
        const command = input[i].split(' ');

        if (command[0] === 'push') {
            result.push(Number(command[1]));
        } else if (command[0] === 'pop') {
            logs.push(result.length ? result.pop() : -1);
        } else if (command[0] === 'size') {
            logs.push(result.length);
        } else if (command[0] === 'empty') {
            logs.push(result.length === 0 ? 1 : 0);
        } else {
            logs.push(result.length ? result[result.length - 1] : -1);
        }
    }

    console.log(logs.join('\n'));
});
