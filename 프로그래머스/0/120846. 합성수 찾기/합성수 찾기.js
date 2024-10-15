function solution(n) {
    let answer = 0;

    for (i=2; i<=n; i++) {
        let divisorCount = 0;

        for (j=1; j<=i; j++) {
            if (i%j === 0) {
                divisorCount++;
            }
        }

        if (divisorCount>=3) {
            answer++;
        }
    }

    return answer;
}
