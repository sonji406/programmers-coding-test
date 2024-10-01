function solution(array) {
    let answer = 0;
    let maxConut = 0;
    const objectNumber = {};
    
    for (i=0; i<array.length; i++) {
        
        if (array[i] in objectNumber) {
            objectNumber[array[i]] += 1;
        } else {
            objectNumber[array[i]] = 1;
        }
        
    }
    
    for (let key in objectNumber) {
        if (objectNumber[key] > maxConut) {
            maxConut = objectNumber[key];
            answer = Number(key);
        } else if(objectNumber[key] === maxConut) {
            answer = -1;
        }
    }
    
    return answer;
}