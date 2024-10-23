const readline = require('readline'); // Node.js의 내장 모듈 readline
const rl = readline.createInterface({
    input: process.stdin, // 콘솔에서 입력받는 스트림
    output: process.stdout, // 콘솔에 출력하는 스트림
});

let input = [];

rl.on('line', function (line) {
    // 'line' 이벤트 리스너 -> 사용자가 엔터 키를 눌러 한 줄의 입력을 완료할 때마다 발생
    input.push(line);
}).on('close', function () {
    const [n, m] = input[0].split(' ').map(Number);
    const cards = input[1]
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);
    let result = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let l = 0; l < n; l++) {
                if (i !== j && j !== l && i !== l) {
                    let sum = cards[i] + cards[j] + cards[l];

                    if (result < sum && sum <= m) {
                        result = sum;
                    }
                }
            }
        }
    }

    console.log(result);
});
