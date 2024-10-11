function solution(numbers, direction) {
    let answer = [];
    
    if (direction==='right') {
        answer.push(numbers.pop());
        answer = answer.concat(numbers);
    } else {
        answer.push(numbers.shift());
        answer = numbers.concat(answer);
    }
    
    return answer;
}