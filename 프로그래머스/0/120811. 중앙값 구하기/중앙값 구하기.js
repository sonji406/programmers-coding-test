// function solution(array) {
//     const answer = [...array].sort((a, b) => a - b);
//     return answer[Math.trunc(array.length/2)];
// }

// 가독성을 고려해서 수정하면,,
function solution(array) {
    const sortedArray = [...array].sort((a, b) => a - b);
    const middleIndex = Math.trunc(sortedArray.length / 2);
    
    return sortedArray[middleIndex];
}
