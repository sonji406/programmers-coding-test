// function solution(n) {
//     const answer = [];
    
//     for (i=1; n>=i; i++) {
//         if (i%2 !== 0) {
//             answer.push(i);
//         }    
//     }
    
//     return answer;
// }

function solution(n) {
    const answer = [];
    
    for (i=1; n>=i; i+=2) answer.push(i);
    
    return answer;
}