const solution = (left, right) => {        
    let arr = [];
    let total = 0;
    for(let i = left; i <= right; i++){        
        for(let x = 1; x <= i; x++){
            if(i % x === 0) {
                arr.push(x);
            }                        
        }
        if(arr.length % 2 === 0){
            console.log("arr 짝 =>", i);
            total += i;      
            arr = [];
        }else{
            console.log("arr 홀 =>", i);
            total -= i;
            arr = [];
        }
    }    
    return total;
}
solution(13, 17);