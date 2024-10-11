function solution(s) {
    let answer = 0;
    const sArr = s.split(' ');
    
    if (!sArr.includes('Z')) {
        answer = sArr.map(Number).reduce((acc, cur) => acc + cur);
    } else {
        for (i=0; i<sArr.length; i++) {
            if (sArr[i] === 'Z') {
                answer -= sArr[i-1];
            } else {
                answer += Number(sArr[i]);
            }
        }
    }
    
    return answer;
}