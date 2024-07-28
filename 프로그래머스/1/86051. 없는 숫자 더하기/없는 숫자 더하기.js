const solution = numbers => {
    let num = 0;
    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) num += i;
    }
    return num;
}

console.log(solution([1,2,3,4,6,7,8,0]));