// function solution(number, limit, power) {
//     let num = [];
    
//     // 1부터 number까지 각 숫자의 약수 개수 계산
//     for (let i = 1; i <= number; i++) {
//         let divisorCount = 0;

//         // 약수 개수 계산
//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 divisorCount++;
//             }
//         }

//         // 제한 수치를 초과하는 경우 power 사용
//         if (divisorCount > limit) {
//             num.push(power);
//         } else {
//             num.push(divisorCount);
//         }
//     }

//     // 약수 개수의 총합 계산
//     let answer = num.reduce((a, b) => a + b, 0);
//     return answer;
// }

// // 테스트 실행
// console.log(solution(5, 3, 2)); // 10
// console.log(solution(10, 3, 2)); // 21

function solution(number, limit, power) {
    let answer = 0;

    for (let num = 1; num <= number; ++num) {
        let count = 0;
        const sqrt = Math.sqrt(num);

        for (let idx = 1; idx <= sqrt; ++idx) {
            if (num % idx === 0) {
                if (num / idx === idx) {
                    count += 1;
                } else {
                    count += 2;
                }
            }
        }

        if (count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }

    return answer;
}