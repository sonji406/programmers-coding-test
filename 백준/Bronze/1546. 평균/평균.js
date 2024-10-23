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
    const scoreArr = input[1].split(' ').map(Number);
    const maxScore = Math.max(...scoreArr);

    console.log(
        scoreArr.reduce((acc, cur) => acc + (cur / maxScore) * 100, 0) /
            Number(input[0]).toFixed(2)
    );
});
