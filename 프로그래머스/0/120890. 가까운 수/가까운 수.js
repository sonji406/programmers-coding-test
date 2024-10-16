// function solution(array, n) {
//     let answer = array[0];
//     let gap = Math.abs(n - array[0]);
    
//     for (let i = 1; i < array.length; i++) {
//         let currentGap = Math.abs(n - array[i]);
        
//         if (currentGap < gap || (currentGap === gap && array[i] < answer)) {
//             gap = currentGap;
//             answer = array[i];
//         }
//     }
    
//     return answer;
// }

function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

    return array[0];
}


// n과의 차이를 절대값으로 계산하여 오름차순 정렬
// 차이가 같은 경우 작은 숫자가 먼저 오도록 정렬