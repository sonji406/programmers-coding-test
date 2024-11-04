function solution(dots) {
    let answer = 0;
    const xArr = [];
    const yArr = [];
    
    for (const dot of dots) {
        xArr.push(dot[0]);
        yArr.push(dot[1]);
    }
    
    const xMin = Math.min(...xArr);
    const xMax = Math.max(...xArr);
    const yMin = Math.min(...yArr);
    const yMax = Math.max(...yArr);
    
    const width = xMax - xMin;
    const height = yMax - yMin;
    
    answer = width * height;
    
    return answer;
}