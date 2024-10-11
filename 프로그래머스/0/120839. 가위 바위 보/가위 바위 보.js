function solution(rsp) {
    let answer = '';
    
    for(i=0; i<rsp.length; i++) {
        answer += Number(rsp[i])===2 ? 0 : Number(rsp[i])===0 ? 5 : 2;
    }
    
    return answer;
}