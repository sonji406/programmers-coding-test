function solution(keyinput, board) {
    const answer = [0, 0];
    const [xLimit, yLimit] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    for (const key of keyinput) {
        if (key === 'up' && answer[1] < yLimit) answer[1] += 1;
        if (key === 'down' && answer[1] > -yLimit) answer[1] -= 1;
        if (key === 'left' && answer[0] > -xLimit) answer[0] -= 1;
        if (key === 'right' && answer[0] < xLimit) answer[0] += 1;
    }
    
    return answer;
}
