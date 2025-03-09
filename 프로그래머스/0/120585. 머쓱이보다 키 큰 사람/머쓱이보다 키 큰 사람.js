const solution = (array, height) => {
    let answer = 0;
    const test = array.filter((h) => h > height ? answer += 1 : 0);
    return answer;
}