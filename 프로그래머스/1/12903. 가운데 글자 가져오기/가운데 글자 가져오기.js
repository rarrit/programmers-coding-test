const solution = s => {    
    const center = Math.floor(s.length / 2);
    if(s.length % 2 === 0) {
      return s.slice(center - 1, center + 1)  
    }else{
        return s[center];  
    } 

    
}
solution('abcdef');