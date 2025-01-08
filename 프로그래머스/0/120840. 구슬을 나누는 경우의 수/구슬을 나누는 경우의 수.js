function solution(balls, share) {
    let result = 1;
    
    for (let i = 0; i < share; i++) {
        result *= (balls - i);
        result /= (i + 1);
    }
    
    return Math.round(result);
}