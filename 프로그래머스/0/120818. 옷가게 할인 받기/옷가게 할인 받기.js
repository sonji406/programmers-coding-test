function solution(price) {
    const answer = price >= 500000 ? price * 0.8 : price >= 300000 ? price * 0.9 : price >= 100000 ? price * 0.95 : price;
    return Math.trunc(answer);
}