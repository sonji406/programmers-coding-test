const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const [A, B, V] = line.split(' ').map(Number);

    const days = Math.ceil((V - B) / (A - B));

    console.log(days);
    rl.close();
});