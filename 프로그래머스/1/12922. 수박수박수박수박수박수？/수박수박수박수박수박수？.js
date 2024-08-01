const solution = n => {
    let str = [];
    for(i = 0; i < n; i++){
        str.push(i % 2 === 0 ? '수' : '박');
    }
    return str.join('');
}
