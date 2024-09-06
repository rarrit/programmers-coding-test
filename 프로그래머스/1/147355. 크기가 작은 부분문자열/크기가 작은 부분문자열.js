const solution = (t, p) => {
    const sliceLength = p.length;  // p의 길이 저장
    const pNum = Number(p);  // p를 숫자로 변환
    let count = 0;  // 결과를 저장할 변수

    // t에서 부분 문자열 추출 및 비교
    for (let i = 0; i <= t.length - sliceLength; i++) {
        const currentSlice = t.substring(i, i + sliceLength);  // 부분 문자열 추출
        if (Number(currentSlice) <= pNum) {  // 부분 문자열 숫자와 p 비교
            count++;  // 조건에 맞으면 카운트 증가
        }
    }

    return count;  // 결과 반환
};

console.log(solution("3141592", "271"));  // 2 출력