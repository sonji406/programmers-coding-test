function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);    
    const answer = emergency.map(e => sorted.indexOf(e) + 1);

    return answer;
}
