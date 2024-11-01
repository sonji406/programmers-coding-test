const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const T = parseInt(input[0]); // 첫 줄은 테스트 케이스 개수
    let result = [];

    for (let i = 0; i < T; i++) {
        const [N, M] = input[i * 2 + 1].split(" ").map(Number); // 문서 개수(N)와 타겟 문서 위치(M)
        const priorities = input[i * 2 + 2].split(" ").map(Number); // 문서 중요도 배열

        // 큐 초기화: 각 문서의 인덱스와 중요도를 객체로 저장
        let queue = priorities.map((priority, index) => ({ index, priority }));
        let printOrder = 0; // 출력 순서 저장

        while (queue.length > 0) {
            const current = queue.shift(); // 첫 번째 문서를 꺼냄

            // 큐에 더 높은 중요도를 가진 문서가 있는지 확인
            const hasHigherPriority = queue.some(doc => doc.priority > current.priority);

            if (hasHigherPriority) {
                // 더 중요한 문서가 있으면 현재 문서를 큐의 뒤로 보냄
                queue.push(current);
            } else {
                // 출력할 문서라면 출력 순서를 증가시킴
                printOrder++;

                // 현재 문서가 우리가 찾던 문서(M)라면, 결과 배열에 추가하고 종료
                if (current.index === M) {
                    result.push(printOrder);
                    break;
                }
            }
        }
    }

    console.log(result.join("\n"));
});
