const solution = (a, b, n) => {
    // a: 빈 병
    // b: a 만큼 받으면 주는 병 
    let answer = 0;
    let remain = n;

    while (true) {
        if (a > remain) {
            break;
        }
        answer += parseInt(remain/a)*b;
        remain = parseInt(remain/a)*b + remain%a
    }

    return answer;
}