const solution = (num, k) => {
    let idx = num.toString().indexOf(k.toString());
    return idx === -1 ? -1 : idx + 1;
}