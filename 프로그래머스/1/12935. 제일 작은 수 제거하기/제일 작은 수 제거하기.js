const solution = arr => {
    if(arr.length <= 1) return [-1];
    let deleteNum =  arr.reduce((a,b) => a < b ? a : b);
    let idx = arr.indexOf(deleteNum);
    arr.splice(idx, 1);
    return arr;
}
console.log(solution([4,3,2,1]));