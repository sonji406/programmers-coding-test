function solution(age) {
    let answer = '';
    // const ageArr = ['a','b','c','d','e','f','g','h','i','j'];
    const age962 = 'abcdefghij';
    
    age = String(age);
    
    for(i=0; i<age.length; i++) {
        answer += age962[age[i]];
    }
    
    return answer;
}