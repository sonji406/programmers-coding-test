function solution(array) {
    let answer = 0;
    let maxCount = 0;
    let isMultiple = false;
    const objectNumber = {};
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] in objectNumber) {
            objectNumber[array[i]] += 1;
        } else {
            objectNumber[array[i]] = 1;
        }
    }
    
    for (let key in objectNumber) {
        if (objectNumber[key] > maxCount) {
            maxCount = objectNumber[key];
            answer = Number(key);
            isMultiple = false;
        } else if (objectNumber[key] === maxCount) {
            isMultiple = true;
        }
    }
    
    return isMultiple ? -1 : answer;
}
