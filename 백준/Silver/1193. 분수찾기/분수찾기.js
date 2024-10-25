const readline = require('readline'); // Node.js의 내장 모듈 readline
const rl = readline.createInterface({
    input: process.stdin, // 콘솔에서 입력받는 스트림
    output: process.stdout, // 콘솔에 출력하는 스트림
});

let input = 0;

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    let X = parseInt(input); // X번째 분수
    let n = 1; // 대각선 번호
    let sum = 1; // 각 대각선의 마지막 분수 번호

    // X가 속한 대각선을 찾기
    while (sum < X) {
        n++; // 다음 대각선
        sum += n; // 현재 대각선의 마지막 분수 번호
    }

    // X가 해당 대각선에서 몇 번째인지 계산
    let pos = X - (sum - n);

    // 분자와 분모 계산
    let numerator, denominator;
    if (n % 2 === 0) {
        // 짝수 대각선
        numerator = pos;
        denominator = n - pos + 1;
    } else {
        // 홀수 대각선
        numerator = n - pos + 1;
        denominator = pos;
    }

    console.log(`${numerator}/${denominator}`);
});
