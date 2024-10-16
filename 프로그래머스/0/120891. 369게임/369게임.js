function solution(order) {
    let answer = [...String(order)].map(Number).filter((num) => num !== 0 && num % 3 === 0).length;
    
    return answer;
}
