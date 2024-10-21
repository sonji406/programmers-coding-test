const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(Number(line));
}).on('close', function () {
    const maxNumber = Math.max(...input);
    const maxIndex = input.indexOf(maxNumber) + 1;

    console.log(maxNumber);
    console.log(maxIndex);
});
