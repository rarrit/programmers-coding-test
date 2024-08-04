const solution = size => {
    const sizes = size.map(arr => arr.sort((a,b) => b - a));
    const maxWidth = sizes.map(widths => widths[0]).reduce((a, b) => Math.max(a, b));
    const maxHeight = sizes.map(heights => heights[1]).reduce((a, b) => Math.max(a, b));
    return maxWidth * maxHeight;
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));