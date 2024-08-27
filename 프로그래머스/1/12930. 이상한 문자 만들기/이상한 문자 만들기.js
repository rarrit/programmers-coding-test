
const solution = s => {
    return s
        .split(' ') // 공백을 기준으로 단어를 나눠줌
        .map(word =>
            word
                .split('') // 단어를 문자 배열로 나눔
                .map((t, idx) => idx % 2 === 0 ? t.toUpperCase() : t.toLowerCase()) 
                .join('') 
        )
        .join(' '); // 단어를 다시 공백으로 연결합니다.
}

console.log(solution("try hello world"));