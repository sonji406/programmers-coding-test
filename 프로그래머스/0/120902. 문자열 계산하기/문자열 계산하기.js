function solution(my_string) {
    const tokens = my_string.split(' ');

    let answer = Number(tokens[0]);

    for (i=1; i<tokens.length; i+=2) {
        const operator = tokens[i];
        const number = Number(tokens[i+1]);

        if (operator==='+') {
            answer+=number;
        } else if (operator==='-') {
            answer-=number;
        }
    }

    return answer;
}
