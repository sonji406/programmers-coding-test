const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let triangle = '';
    
    for (i=1; i<=Number(input[0]); i++){
        triangle += '*'
        console.log(triangle);
    }
    
});