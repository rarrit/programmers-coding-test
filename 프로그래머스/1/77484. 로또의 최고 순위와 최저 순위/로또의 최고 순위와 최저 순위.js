const solution = (lottos, win_nums) => {
    let num = 0; // 알아볼 수 없는 숫자 : 0
    let curr = 0; // 당첨번호와 일치

    lottos.forEach((item) => {
        if (item == 0) num++;
        else if (win_nums.includes(item)) curr++;
    });
    
    
    // 최저 순위: 7 - 맞은 로또 수, 
    // 맞은 개수: 0,1개일경우 6위
    // 최고 순위: 7 - (맞은 로또 수 + 0 개수), 즉, 최소 순위 - 0개수
    let min = 7 - curr >= 6 ? 6 : 7 - curr;
    let max = min - num < 1 ? 1 : min - num;
    
    return [max, min];
}