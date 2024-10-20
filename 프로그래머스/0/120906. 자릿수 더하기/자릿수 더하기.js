function solution(n) {
    let answer = [...String(n)].reduce((acc, cur) => Number(acc) + Number(cur), 0);
    return answer;
}