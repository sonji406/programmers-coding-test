function solution(n, t) {
    let answer = n;
    
    for (i=0; i<t; i++) {
        answer += answer;
    }
    
    return answer;
}