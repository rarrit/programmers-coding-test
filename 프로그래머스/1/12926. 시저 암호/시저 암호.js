// s를 n만큼 민다.
// s는 문자열
// n은 거리
const solution = (s, n) => {
    // 대문자 알파벳 문자열    
    let strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // 소문자 알파벳 문자열
    let strLower = "abcdefghijklmnopqrstuvwxyz";
    // 저장할 변수
    let answer = "";
    // 문자열 s를 한 글자씩 순회함
    for(i = 0; i < s.length; i++) {
        let _target = s[i]; // 현재 글자
        if(_target == " ") {
            // 글자가 공백일 경우
            answer += " "; // 공백을 결과에 추가
            continue; // 다음 글자로 이동
        }
        // 대소문자 확인 후 배열 선택
        let textArr = strUpper.includes(_target) ? strUpper : strLower;
        
        // 알파벳 배열에서 현재 위치(index)를 찾고 n만큼 이동
        let index = textArr.indexOf(_target) + n;
        
        // 배열 끝일 경우 처음으로 돌아가도록 적용
        if(index >= textArr.length) index -= textArr.length;
        
        // 이동한 결과를 answer 적용
        answer += textArr[index];
    }
    
    return answer;
}