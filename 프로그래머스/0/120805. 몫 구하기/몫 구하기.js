function solution(num1, num2) {
    const answer = Math.trunc(num1 / num2);
    return answer;
}
/* Math.trunc는 소수점 이하를 잘라냄
비슷한 함수 Math.floor()는 음수에 대해 내림 처리
Math.floor(5.3 / 2); >> 2
Math.floor(-5.3 / 2); >> -3
결론 : Math.trunc()는 소수점을 제거하고, Math.floor()는 내림을 적용하여 더 작은 값을 반환하여
두 숫자를 나눈 정확한 몫을 가지려면 Math.trunc()가 더 적절한 듯 */
