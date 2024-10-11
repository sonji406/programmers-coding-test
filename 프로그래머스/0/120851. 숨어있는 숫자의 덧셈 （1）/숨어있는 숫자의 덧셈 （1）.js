function solution(my_string) { 
    const numbers = my_string.match(/[0-9]/g).map(Number);
    const answer = numbers.reduce((acc, cur) => acc + cur);
    
    return answer;
}