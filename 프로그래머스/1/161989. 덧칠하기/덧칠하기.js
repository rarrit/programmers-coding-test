const solution = (n, m, section) => {
    let answer = 0
    
    let arr = new Array(n).fill(true)
    section.forEach(target => arr[target-1] = false)
    
    for(let i = 0 ; i < arr.length ; i++) {
        if(!arr[i]) {
            answer += 1
            i += m-1
        }    
    }
    
    return answer
}