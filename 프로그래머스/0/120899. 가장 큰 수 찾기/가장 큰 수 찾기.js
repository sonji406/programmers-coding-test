// 시간 복잡도 : O(nlogn)
// function solution(array) {
//     const maxNumber = [...array].sort((a, b) => a - b).pop();
//     const answer = [maxNumber, array.indexOf(maxNumber)];

//     return answer;
// }


// 시간 복잡도 : O(n)
function solution(array) {
    let maxNumber = array[0];
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
            maxIndex = i;
        }
    }

    return [maxNumber, maxIndex];
}