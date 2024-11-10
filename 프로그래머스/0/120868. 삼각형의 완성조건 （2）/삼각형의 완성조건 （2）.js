function solution(sides) {
    let answer = 0;
    const maxSide = Math.max(...sides);
    const minSide = Math.min(...sides);
    
    const minLength = maxSide - minSide + 1;
    const maxLength = maxSide + minSide - 1;
    
    answer = maxLength - minLength + 1;

    return answer;
}
