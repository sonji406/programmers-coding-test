function solution(sides) {
    let answer = 0;
    sides.sort((a, b) => a - b);
    
    return answer = sides[0]+sides[1] > sides[2] ? 1 : 2;
}