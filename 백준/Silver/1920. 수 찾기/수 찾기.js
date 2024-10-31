const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const mySet = new Set(input[1].split(' '));
    const checkArr = input[3].split(' ');

    for (let i = 0; i < checkArr.length; i++) {
        console.log(mySet.has(checkArr[i]) ? 1 : 0);
    }
});
