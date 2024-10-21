const getCount = n => {
  for(let i = 2; i <= Math.sqrt(n); i ++) {
    if(n % i === 0) return false
  }
  return true;
}

const solution = nums => {
  let result = 0;
  const numsLenght = nums.length;

  for(let i = 0; i <= numsLenght - 2; i ++) {
    for(let j = i + 1; j < numsLenght - 1; j ++) {
      for(let k = j + 1; k < numsLenght; k ++) {
        const sum = nums[i] + nums[j] + nums[k];
        console.log(getCount(sum));
        if(getCount(sum)) result ++;
      }
    }
  }
  
  return result;

}

console.log(solution([1,2,7,6,4]));