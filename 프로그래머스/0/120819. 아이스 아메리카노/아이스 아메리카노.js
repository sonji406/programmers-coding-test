function solution(money) {
    const answer = [];
    
    answer.push(Math.trunc(money/5500));
    answer.push(money-Math.trunc(money/5500)*5500);

    return answer;
}