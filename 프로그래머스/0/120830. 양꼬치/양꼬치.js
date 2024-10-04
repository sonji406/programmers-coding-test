function solution(n, k) {
    let discount = Math.trunc(n/10) * 2000;
    let answer = n * 12000 + k * 2000 - discount;
    
    return answer;
}