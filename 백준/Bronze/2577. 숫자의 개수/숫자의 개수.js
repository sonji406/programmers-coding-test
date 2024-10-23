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
    const result = input
        .map(Number)
        .reduce((acc, cur) => acc * cur)
        .toString()
        .split('');
    const numberCount = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    };

    for (const key in numberCount) {
        for (const num of result) {
            if (key === num) {
                numberCount[key] += 1;
            }
        }
    }

    for (const key in numberCount) {
        console.log(numberCount[key]);
    }
});
