// function solution(n, numlist) {
//     let answer = [];
    
//     for(i=0;i<numlist.length; i++) {
//         if (numlist[i]%n === 0) {
//             answer.push(numlist[i]);
//         }
//     }
    
//     return answer;
// }

function solution(n, numlist) {
    let answer = numlist.filter((num) => num%n===0);
    
    return answer;
}