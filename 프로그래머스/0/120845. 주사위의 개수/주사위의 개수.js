function solution(box, n) {
    let answer = 1;
    
    for (i=0; i<box.length; i++) {
        answer *= Math.trunc(box[i]/n);
    }

    return answer;
}

