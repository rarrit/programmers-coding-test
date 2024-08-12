const solution = s => {
    if(s.length !== 4 && s.length !== 6) return false;
    const strFilter = [...s].filter(str => isNaN(str));    
    return strFilter.length > 0 ? false : true;
}
solution("1525aa")