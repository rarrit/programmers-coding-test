function solution(array, commands) {
    // 결과를 저장할 배열
    let answer = [];
    
    // commands 배열을 순회하며 각 명령을 처리
    for(let i=0; i < commands.length; i++){
        // array에서 commands[i][0]-1 (시작 인덱스)부터 commands[i][1] (끝 인덱스)까지 잘라낸 후 정렬
        let list = array
        .slice(
            commands[i][0]-1, 
            commands[i][1])
        .sort((a,b)=>{return a-b});
        
        // 정렬된 리스트에서 commands[i][2]-1 번째 값을 추출해 answer에 추가
        answer.push(list[commands[i][2]-1]);
    }

    return answer;
}