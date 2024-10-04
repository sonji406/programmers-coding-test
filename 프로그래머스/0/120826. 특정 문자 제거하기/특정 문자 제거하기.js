function solution(my_string, letter) {
    let answer = my_string;
    
    return answer.split(letter).join('');
}