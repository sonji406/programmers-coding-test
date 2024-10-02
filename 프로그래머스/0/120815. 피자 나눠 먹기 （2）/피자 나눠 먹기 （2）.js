function solution(n) {
    let answer = 1;
    let totalSlices = 6;

    while (totalSlices % n !== 0) {
        answer++;
        totalSlices += 6;
    }

    return answer;
}
