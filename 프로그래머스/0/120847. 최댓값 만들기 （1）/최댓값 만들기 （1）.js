const solution = numbers => {
    const num = numbers.sort((a,b) => b - a);
    return num[0] * num[1];
}