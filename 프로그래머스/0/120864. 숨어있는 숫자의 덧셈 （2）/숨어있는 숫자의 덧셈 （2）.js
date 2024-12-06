function solution(my_string) {
    const numbers = my_string.match(/\d+/g);

    if (!numbers) return 0;

    return numbers.map(Number).reduce((sum, num) => sum + num, 0);
}