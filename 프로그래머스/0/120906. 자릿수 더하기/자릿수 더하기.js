function solution(n) {
    let answer = [...String(n)].map(Number).reduce((acc, cur) => acc + cur);
    return answer;
}