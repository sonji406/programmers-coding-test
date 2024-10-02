function solution(n) {
    let answer = 1;
    let totalSlices = 6;

    while (totalSlices % n !== 0) {
        answer++;
        totalSlices += 6;
    }

    return answer;
}

/*
먼저 피자 한 판을 시킴
만약 그 판으로 친구들 모두가 똑같이 나눠 먹을 수 있다면 끝!
하지만 못 나눠 먹는다면 피자 한 판을 더 시켜서 계속 나눠보기
결국 모두가 똑같이 나눠 먹을 수 있을 때까지 계속 시키기
*/