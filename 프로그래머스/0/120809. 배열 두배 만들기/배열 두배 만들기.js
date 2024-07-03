const solution = (numbers) => {
    // 배열 생성
    let answer = [];
    
    // numbers 에 대입된 값들을 곱하기 2해준 다음 answer 에 넣어줌
    numbers.forEach(target => {
        answer.push(target * 2);
    })
    
    // 값 반환
    return answer;
} 

console.log(solution[1,2,3,4,5]);
console.log(solution[1,2,100,-99,1,2,3]);