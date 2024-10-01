function solution(numer1, denom1, numer2, denom2) {
    // 1. 두 분모의 최소공배수(lcm) 구하기
    let denom3 = lcm(denom1, denom2);
    
    // 2. 두 분수를 최소공배수로 통분하여 분자 합산
    let numer3 = numer1 * (denom3 / denom1) + numer2 * (denom3 / denom2);
    
    // 3. 결과 분수의 최대공약수(gcd) 구하기
    const gcdValue = gcd(numer3, denom3);
    
    // 4. 분자와 분모를 최대공약수로 나누어 기약분수로 만들기
    numer3 = numer3 / gcdValue;
    denom3 = denom3 / gcdValue;
    
    // 5. 기약분수 반환
    return [numer3, denom3];
}

function gcd(number1, number2) {
    let a = number1;
    let b = number2;
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(number1, number2) {
    // 두 수의 최소공배수(lcm)를 구하기 위해 gcd 사용
    return (number1 * number2) / gcd(number1, number2);
}


/*
1. 분모 최대공약수(gcd) - 유클리드 호제법
2. 분모 최소공배수(lcm)
3. 분수 통분
4. 분자 더하기
5. 분수의 최대공약수(gcd)
*/