const solution = (a,b) => {
    let arr = [];
    for(let i = 0; i < a.length; i++){
        arr.push(a[i] * (b[i]));
    }
    return arr.reduce((a,b) => a + b);
}
solution([1,2,3,4],[-3,-1,0,2])