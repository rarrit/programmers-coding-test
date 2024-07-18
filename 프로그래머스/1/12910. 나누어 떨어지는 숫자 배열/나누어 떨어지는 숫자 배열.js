const solution = (arr, divisor) => {
    let x = [];
    for(let i = 0; i <= arr.length; i ++){
        if(arr[i] % divisor === 0) x.push(arr[i])            
    }
    x.length === 0 ? x.push(-1) : x.sort((a,b) => a - b);
    return x;
}