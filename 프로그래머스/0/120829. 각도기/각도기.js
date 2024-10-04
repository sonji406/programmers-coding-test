function solution(angle) {
    let answer = 0;
    
    if (angle <= 90) {
        if (angle === 90) {
            answer = 2;
        } else {
            answer = 1;
        }
    } else if (angle < 180) {
        answer = 3;
    } else {
        answer = 4;
    }
    
    return answer;
}