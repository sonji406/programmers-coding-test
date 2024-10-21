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
        let totalScore = 0;
        let correctScore = 0;

        for (let question of input[i]) {
            if (question === 'O') {
                correctScore += 1;
                totalScore += correctScore;
            } else {
                correctScore = 0;
            }
        }

        console.log(totalScore);
    }
});
