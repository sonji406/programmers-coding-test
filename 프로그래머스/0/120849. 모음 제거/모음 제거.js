function solution(my_string) {
    let answer = my_string;
    const gather = ['a', 'e', 'i', 'o', 'u'];
    
    for (i=0; i<gather.length; i++) {
        answer = answer.replace(new RegExp(gather[i], 'g'), '');
    }
    
    return answer;
}