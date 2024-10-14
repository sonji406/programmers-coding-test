function solution(age) {
    let answer = '';
    const ageArr = ['a','b','c','d','e','f','g','h','i','j'];
    
    age = String(age);
    
    for(i=0; i<age.length; i++) {
        answer += ageArr[age[i]];
    }
    
    return answer;
}