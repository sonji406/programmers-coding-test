function solution(numbers, direction) {
    let answer = [...numbers];
    
    if (direction === 'right') {
        answer.unshift(answer.pop());
    } else {
        answer.push(answer.shift());
    }
    
    return answer;
}
