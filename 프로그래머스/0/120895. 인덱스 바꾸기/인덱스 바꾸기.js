function solution(my_string, num1, num2) {
    let stringArr = [...my_string];
    let temp = stringArr[num1];
    
    stringArr[num1] = stringArr[num2];
    stringArr[num2] = temp;
    
    return stringArr.join('');
}