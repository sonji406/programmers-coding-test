function solution(num, k) {
    let answer = String(num).split('').map(Number).indexOf(k);
    
    
    return answer === -1 ? -1 : answer + 1;
}