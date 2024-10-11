function solution(my_string) {
    const regex = /[0-9]/g;
    const answer = my_string.match(regex).map(Number);
    
    return answer.sort((a, b) => a - b);
}