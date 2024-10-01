function solution(array) {
    const answer = [...array].sort((a, b) => a - b);
    return answer[Math.trunc(array.length/2)];
}