const solution = (absolutes, sings) => {
    for(let i = 0; i < absolutes.length; i ++) {
        (sings[i] === true) 
        ? absolutes[i] = Math.abs(absolutes[i]) 
        : absolutes[i] = (absolutes[i]) * -1;
        
    }
    return absolutes.reduce((a, b) => a + b, 0);
}
console.log(solution([4,7,12],[true,false,true]));