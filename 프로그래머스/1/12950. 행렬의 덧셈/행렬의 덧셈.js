const solution = (arr1, arr2) => arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));
console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));