const solution = phone_number => {
    let str = '';
    for(let i = 0; i < phone_number.length; i++){
        i < phone_number.length - 4
        ? str += "*" 
        : str += phone_number[i]
    }
    return str;
}