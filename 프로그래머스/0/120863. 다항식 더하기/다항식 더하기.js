function solution(polynomial) {
    let terms = polynomial.split(' + ');
    let xCoefficient = 0;
    let constant = 0;

    for (let term of terms) {
        if (term.includes('x')) {
            if (term === 'x') {
                xCoefficient += 1;
            } else {
                xCoefficient += parseInt(term.replace('x', ''));
            }
        } else {
            constant += parseInt(term);
        }
    }

    let answer = [];
    if (xCoefficient > 0) {
        answer.push(xCoefficient === 1 ? 'x' : `${xCoefficient}x`);
    }
    if (constant > 0) {
        answer.push(constant.toString());
    }

    return answer.join(' + ');
}