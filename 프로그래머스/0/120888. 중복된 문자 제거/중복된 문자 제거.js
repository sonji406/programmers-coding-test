function solution(my_string) {
    let seen = new Set();
    let answer = '';
    
    for (let char of my_string) {
        if (!seen.has(char)) {
            seen.add(char);
            answer += char;
        }
    }
    
    return answer;
}
