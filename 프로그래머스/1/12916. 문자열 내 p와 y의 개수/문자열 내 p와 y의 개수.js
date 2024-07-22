const solution = str => {
    let arr = [...str];
    let p = [];
    let y = [];
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === 'p' || arr[i] === 'P') {
            p.push(arr[i])
        }else if(arr[i] === 'y' || arr[i] === 'Y'){
            y.push(arr[i])
        }
    }
    return p.length === y.length ? true : false;
}

console.log(solution('pPoooyY'));