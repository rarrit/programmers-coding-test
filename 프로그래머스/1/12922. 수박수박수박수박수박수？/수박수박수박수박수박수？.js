const solution = n => {
    let arr = [];
    for(i = 0; i < n; i++){
        arr.push(i % 2 === 0 ? '수' : '박');
    }
    return arr.join('');
}
