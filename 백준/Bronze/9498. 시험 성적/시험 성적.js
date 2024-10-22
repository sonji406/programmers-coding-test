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
    // 코드 작성
    const score = input[0];
    const grade =
        score >= 90
            ? 'A'
            : score >= 80
            ? 'B'
            : score >= 70
            ? 'C'
            : score >= 60
            ? 'D'
            : 'F';

    console.log(grade);
});
