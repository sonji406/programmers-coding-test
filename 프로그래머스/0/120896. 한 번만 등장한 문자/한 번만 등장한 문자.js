function solution(s) {
    const countObj = {};
    let answer = [];
    
    for (char of s) {
        countObj[char] = (countObj[char] || 0) + 1;
    }
    
    for (char in countObj) {
        if (countObj[char] === 1) {
            answer.push(char);
        }
    }
    
    answer.sort();
    
    return answer.join('');
}