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
    const stringArr = input[1].split('');
    const M = 1234567891;
    let pow31 = 1;
    let result = 0;

    for (let i = 0; i < stringArr.length; i++) {
        result = (result + (stringArr[i].charCodeAt(0) - 96) * pow31) % M;
        pow31 = (pow31 * 31) % M;
    }

    console.log(result);
});
