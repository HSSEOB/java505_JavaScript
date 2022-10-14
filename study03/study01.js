console.log(`-----while문 사용하기-----`);

// 카운트 변수 선언
//
// while(조건식){
//     반복 실행될 소스 코드
//     카운트 변수의 증감식
// }

let count =1 ;

while(count <11){
    console.log(count);
    count++;
}

console.log("\n\n");

dan = 5;
count = 1;

while (count<10){
    console.log(`${dan}*${count}=${dan*count}`);
    count++
}

console.log("\n\n");

// 문제 1) 구구단 전체 출력 . while 문

let num=2;

while (num<10){
    console.log(`\n${num}단\n`);
    for(count=1 ; count<10; count++){
        console.log(`${num}*${count}=${num*count}`);
    }num++;
}

console.log("\n\n");

console.log(`\n-----for문 사용하기-----\n`);

let sum =0 ;
for(let i =1; i<6;i++){
    sum= i+sum;
    console.log(sum);
}

console.log("\n\n");

const arr1 = [1,2,3,4,5,6,7,8,9,10,0];

for (let i=0 ; i<5; i++){
    console.log(arr1[i]);
}

console.log("\n\n");

//문제2. 배열 arr1을 이용하여 1~10까지의 총합을 구하는 프로그램을 for문으로 작성하세요
let sum1=0;
for (let i=0; i<10; i++){
    sum1= arr1[i]+sum1;}
console.log(`0 ~ 10까지의 총합은 '${sum1}' 이다.`);

console.log("\n\n");

for (let i = 0; i <10; i++){
    if(i==5){
        break;
    }else{
        console.log(`현재 i의 값 : ${i}`);
    }
}

console.log("\n\n");

for (let i = 0; i <10; i++){
    if(i==5){
        continue;
    }else{
        console.log(`현재 i의 값 : ${i}`);
    }
}

console.log("\n\n");
num=1;
while (num<10){
    console.log(`\n${num}단\n`);
    for(count=1 ; count<10; count++){
        if(count==6){
            break;
            //break는 얘가 속한 부분의 반복문만 중단.
        }
        console.log(`${num}*${count}=${num*count}`);
    }num++;
}

console.log("\n\n");

// 문제3) 511페이지의 마무리 문제 2번

// 문제 4) 커피 자판 프로그램을 작성하세요
// 1. 사용자가 가지고 있는 금액을 입력 받기
// 2. 커피 1잔의 금액은 300원
// 3. 자판기에 들어있는 커피의 양은 10개
// 4. 커피를 판매할 때마다 1개의 커피가 소비됨
// 5. 소지 금액이 부족 시 '돈이 부족합니다' 를 출력
// 6. 커피가 부족할 경우 '커피가 다 팔렸습니다' 를 출력
// 7. 커피 판매 시 '커피를 한잔 판매 합니다.' 와 커피 재고량을 출력
//      ex) 커피를 한잔 판매합니다.
//          남은 커피 00 잔

let coffee = 10;
let money = 0;
let cOrderNum = 0;
let money1 = 0;
if(coffee==0){
    console.log(`커피가 다 팔렸습니다.`);
}


while(true){

    console.log(`현재 커피가 ${coffee}잔 남아 있습니다.`);
    money = prompt(`얼마를 넣을까요?`,"");
    cOrderNum = prompt("커피를 몇 잔 주문할까요?","");
    count = coffee-cOrderNum;

    while(coffee==0) {
        if (coffee > cOrderNum & money > (300 * cOrderNum)) {
            console.log(`커피를 ${cOrderNum}잔 판매합니다.\n 남은 커피 ${count - cOrderNum}잔 `);
            count = count - cOrderNum;
        }

        if (money < 300 * cOrderNum) {
            console.log("잔액이 부족합니다.");
            let result = confirm("돈을 더 넣으시겠습니까?");
            if (result == true) {
                money1 = prompt(`얼마를 넣을까요?`, "");
                money = money + money1;
            } else {
                console.log("남은 잔액을 반환합니다.");
            }
        }


        if (coffee < cOrderNum) {
            console.log(`현재 커피가 ${cOrderNum}-${count}잔 부족합니다.`);
        }
        if (coffee <= 0) {
            console.log(`커피가 다 팔렸습니다.`);
            break;
        }
    }
}







// 문제 5) 은행 프로그램을 작성하세요
// 1. 프로그램 시작 시 안내 메시지와 메뉴가 출력
//  ex) 안녕하세요 java505 은행입니다.
//  ex) 1: 입금, 2: 예금 확인, 3: 출금, 0: 종료

// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금