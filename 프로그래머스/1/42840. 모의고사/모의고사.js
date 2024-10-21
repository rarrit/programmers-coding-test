const solution = answers => {
  const result = [];
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 맞춘 문제 수
  let count = [0, 0, 0];

  answers.forEach((answer, index) => {
    if(answer === student1[index % student1.length]) count[0] ++;
    if(answer === student2[index % student2.length]) count[1] ++;
    if(answer === student3[index % student3.length]) count[2] ++;
  });

  const maxCount = Math.max(...count);
  count.map((winner, index) => {
    if(winner === maxCount) result.push(index + 1); 
  });
  return result.filter((num) => num !== "undefined");

}

console.log(solution([1,2,3,4,5]));