function solution(numbers) {
    var answer = numbers.reduce((acc, cur) => acc + cur);
    return answer/numbers.length;
}