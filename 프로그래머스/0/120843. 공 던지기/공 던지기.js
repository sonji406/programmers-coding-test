function solution(numbers, K) {
    let currentIndex = 0;
    
    for (i=1; i<K; i++) {
        currentIndex += 2;

        if (currentIndex>=numbers.length) {
            currentIndex -= numbers.length;
        }
    }
    
    return numbers[currentIndex];
}
