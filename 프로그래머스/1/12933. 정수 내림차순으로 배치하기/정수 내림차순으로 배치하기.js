const solution = n => {
    let arr = (n + '').split('').map(Number);
    arr.sort((a, b) => b - a);    
    return Number(arr.join(''))
}