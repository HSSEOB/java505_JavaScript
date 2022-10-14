
// 문제 6) 문제 3의 소스코드를 함수를 사용하는 방식으로 수정하세요
//1. 사용자 입력부분을 함수로 생성. quiz2Input
//2. 3의 배수 계산하는 부분을 함수로 생성. quiz2Cal


let count=0;
let arr1=[];



function quiz2Input(num) {
    for (let i = 0; i < num; i++) {
        arr1[i] = i + 1;
    }
    return arr1;
}

    function quiz2Cal(num) {
        for (let i = 0; i < num; i++) {
            if (arr1[i] % 3 == 0) {
                console.log(arr1[i]);
                count++;
            }
        }
        console.log(`${num}까지 3의 배수의 개수 : ${count}`);
    }


let num= prompt(`몇 까지 3의 배수를 찾을까요?`,"")
quiz2Input(num);
quiz2Cal(num);
