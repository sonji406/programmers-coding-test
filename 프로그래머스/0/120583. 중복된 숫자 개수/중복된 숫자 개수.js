function solution(array, n) {
    let answer = 0;
    
    for(i=0; i<array.length; i++) {
       answer += array[i] === n ? 1 : 0;
    }
    
    return answer;
}