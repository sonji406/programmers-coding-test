// function solution(n) {
//     const answer = Math.ceil(n / 7);
    
//     return answer;
// }

function solution(n) {
    const answer = Math.floor(n / 7) + (n % 7 === 0 ? 0 : 1); 
    return answer;
}
