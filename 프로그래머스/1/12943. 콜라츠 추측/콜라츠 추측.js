const solution = num => {
    let n = 0; // 작업 횟수 초기화
    
    if(num === 1) return 0; // 1이면 0반환
    
    while(num !== 1){ // 1이되면 종료
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;       
        n ++; // 작업횟수 500 체크하기 위해 더해줌
        if(n == 500) return -1; // 작업횟수 500이면 -1 반환
    }

    return n;
}