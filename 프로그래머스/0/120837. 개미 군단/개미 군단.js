function solution(hp) {
    let answer = 0;
    
    answer = Math.trunc(hp / 5);
    hp = hp % 5;
    answer += Math.trunc(hp / 3);
    hp = hp % 3;
    answer += hp;
    
    return answer;
}