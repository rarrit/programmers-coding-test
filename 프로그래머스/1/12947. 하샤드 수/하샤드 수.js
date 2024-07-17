const solution = x => {
    let nums = (x + '').split('').map(Number);
    nums = nums.reduce((a, b) => a + b);
    return x % nums === 0;    
}
console.log(solution(10));