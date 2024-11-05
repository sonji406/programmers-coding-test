function solution(numbers) {
    let answer = 0;
    
    numbers.sort((a,b) => a - b);
    
    answer = Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
    
    return answer;
}