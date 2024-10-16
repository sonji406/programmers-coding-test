function solution(array, n) {
    let answer = array[0];
    let gap = Math.abs(n - array[0]);
    
    for (let i = 1; i < array.length; i++) {
        let currentGap = Math.abs(n - array[i]);
        
        if (currentGap < gap || (currentGap === gap && array[i] < answer)) {
            gap = currentGap;
            answer = array[i];
        }
    }
    
    return answer;
}
