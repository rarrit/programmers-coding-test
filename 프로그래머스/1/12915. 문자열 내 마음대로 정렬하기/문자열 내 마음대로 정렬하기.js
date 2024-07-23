const solution = (strings, n) => {
    // 1. 문자열의 가장 앞 글자를 붙인 배열 만들기.
    for(let i = 0; i < strings.length; i ++){        
        strings[i] = strings[i][n] + strings[i];
        // strings[0][1] => [0]: sun -> [1]: u
        // strings[i] => [0]: sun
        // strings[i][n] + strings[i] => u + sun        
    }   
    
    // 2. 해당 배열을 사전순으로 정렬 (sort)
    strings.sort();
    
    // 3. 앞글자를 제거 후 리턴
    for(let x = 0; x < strings.length; x ++){
        strings[x] = strings[x].replace(strings[x][0], "");
        // replace(바꿀요소,어떻게바꿀것인가)
    }
    
    return strings
}
console.log(solution(["sun","bed","car"], 1))