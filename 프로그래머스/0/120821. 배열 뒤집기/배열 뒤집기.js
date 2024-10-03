// function solution(num_list) {
//     const answer = [];
//     const arr = [...num_list];
    
//     for (i=0; i<num_list.length; i++) {
//         answer.push(arr.pop());
//     }
    
//     return answer;
// }

function solution(num_list) {
    const answer = [];
    const arr = [...num_list];
    
    for (i=num_list.length - 1; i >= 0; i--) {
        answer.push(num_list[i]);
    }
    
    return answer;
}