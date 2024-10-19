function solution(participant, completion) {
    let answer = new Map();
    
    for (let player of participant) {
        answer.set(player, (answer.get(player) || 0) + 1);
    }

    for (let player of completion) {
        answer.set(player, answer.get(player) - 1);
    }

    for (let [player, count] of answer) {
        if (count > 0) {
            return player;
        }
    }

}