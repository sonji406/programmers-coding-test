function solution(array) {
    const maxNumber = [...array].sort((a, b) => a - b).pop();
    const answer = [maxNumber, array.indexOf(maxNumber)];

    return answer;
}