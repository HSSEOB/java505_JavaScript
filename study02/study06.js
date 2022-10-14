console.log("----- 자바스크립트의 제어문 -----");

// 자바의 제어문과 동일함
// if, if ~ else, else if, switch ~ case

// prompt()는 웹브라우저에서 동작함으로 웹 브라우저에서 js파일을 로딩해 실행해야만 결과 값을 볼 수 있다.
let userNumber = prompt("숫자를 입력하라");
if(userNumber !== null){
    if(userNumber %3 == 0){
        alert(`3의 배수 입니다.`);
    }else{
        alert(`3의 배수가 아닙니다.`);
    }
}
else{
    alert(`입력이 취소되었습니다.`)
}

const score=prompt("점수를 입력해주세요");

if(score>=90){
    console.log(`점수 : ${score}\n 등급 : A`);
    alert(`A`);
}else if(score>=80){
    console.log(`점수 : ${score}\n 등급 : B`);
    alert(`B`);
}else if(score>=70) {
    console.log(`점수 : ${score}\n 등급 : C`);
    alert(`C`);
}else if(score>=60) {
    console.log(`점수 : ${score}\n 등급 : D`);
    alert(`D`);
}else{
    console.log(`점수 : ${score}\n 등급 : F`);
    alert(`F`);
}

let day = new Date().getDay();

switch(day){

    case 0:
        console.log("일요일");
        alert(`일요일`);
        break;

    case 1:
        console.log("월요일");
        alert(`월요일`);
        break;

    case 2:
        console.log("화요일");
        alert(`화요일`);
        break;

    case 3:
        console.log("수요일");
        alert(`수요일`);
        break;

    case 4:
        console.log("목요일");
        alert(`목요일`);
        break;

    case 5:
        console.log("금요일");
        alert(`금요일`);
        break;

    case 6:
        console.log("토요일");
        alert(`토요일`);
        break;

}

// while 사용법이 java와 동일

let count = 0;

while (count<10){
    console.log(`count의 값 : ${count}`);
    count++;
}