function solution(n) {
    let answer = [];
    
    for (i=1; i<=n; i++) {
        if (n%i === 0) {
            answer.push(i);
        }
    }
    
    return answer;
}