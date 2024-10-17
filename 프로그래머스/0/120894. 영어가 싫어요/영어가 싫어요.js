function solution(numbers) {
    let answer = numbers;
    const en_numbers = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };
    
    for (num in en_numbers) {
        const findNum = new RegExp(num, 'g');
        answer = answer.replace(findNum, en_numbers[num]);
    }
    
    return Number(answer);
}