const solution = n => {
    const num = n.toString().split('').map(Number);
    return num.reduce((a, b) => a + b);
}