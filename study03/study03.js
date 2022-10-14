console.log("\n-----함수 사용하기-----\n");

function sum(num1, num2){
    const a = num1;
    const b = num2;
    const result = a+b;
    console.log("두 수의 덧셈은 : " + result);
}

sum(30,40);

// 함수의 4가지 형태
// 1. 매개변수 x, 반환값 x
// 2. 매개변수 o, 반환값 x
// 3. 매개변수 x, 반환값 o
// 4. 매개변수 o, 반환값 o


function add1() {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(`두 수의 합은 ${c}이다`);
}

function add2(num1,num2) {

    const c = num1 + num2;
    console.log(`두 수의 합은 ${c}이다`);
}

function add3() {
    const a = 10;
    const b = 20
    const c = a + b;
    return c;
}

function add4(a,b) {
    const c = a + b;
    return c;
}

console.log("--------------------------------");

var vtn = document.getElementById(("aaa"));
btn.addEventListener("click",function (){
    alert("aaaaaa");
});

const noname = function() {

    const a = 10;
    const b = 20;
    console.log(
        `두 수의 합은 ${a + b}`)
};

noname(10,20);

function funcName(num1, num2){};


//즉시 실행 함수 = 일회용 함수
//익명함수 : 이름이 없어서 호출(실행) 불가한 함수. 매개변수로 함수를 사용시 사용(콜백함수)
//변수에 익명 함수를 대입하여 변수명으로 익명 함수를 호출 할 수 있다.
(function (){
    const a = 10;
    const b = 20;
    const c =a+b;
    console.log(c);
}());

// 문제 6) 문제 3의 소스코드를 함수를 사용하는 방식으로 수정하세요
//1. 사용자 입력부분을 함수로 생성. quiz2Input
//2. 3의 배수 계산하는 부분을 함수로 생성. quiz2Cal

// 문제 7. 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하라
// 1. money, coffee, price의 초기값을 설정하는 함수 생성 coffeeSetup
// 2. 커피 판매 부분을 함수로 생성. coffeeSale

// 문제 8. 문제 5의 소스코드를 함수로 사용하는 방법으로 수정하라
// 1. 입금 부분을 함수로 생성 depositInMoney
// 2. 예금 확인 부분을 함수로 생성 accountCheck
// 3. 출금 부분을 함수로 생성 withdrawOutMoney