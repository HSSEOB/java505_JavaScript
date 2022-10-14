// 문제 8. 문제 5의 소스코드를 함수로 사용하는 방법으로 수정하라
// 1. 입금 부분을 함수로 생성 depositInMoney
// 2. 예금 확인 부분을 함수로 생성 accountCheck
// 3. 출금 부분을 함수로 생성 withdrawOutMoney

function depositInMoney() {
    if (choice == 1) {
        deposit = prompt(`얼마를 입금하시겠습니까?`, "");
        deposit = Number(deposit);
        account = (account + deposit);
        console.log(`${deposit} 원을 입금했습니다.`);
    }
}

function accountCheck() {
    console.log(`현재 계좌의 잔액은 ${account} 원 입니다.`);
}

//아래 출금부분을 반복문으로 바꾸면 고객이 실수한 경우 다시 처음으로 안돌아가고 3번 옵션 내에서 다시 선택하게 만들 수 있음.
function withdrawOutMoney(){
    withdraw = prompt(`얼마를 출금 하시겠습니까?`, "");
    withdraw = Number(withdraw);
    if (account >= withdraw) {
        account = account - withdraw;
        console.log(`${withdraw}원을 출금합니다. 계좌의 남은 잔액은 ${account} 원 입니다. `);

    } else if (account < withdraw) {
        console.log("잔액이 부족합니다.");
    }
    else if (isNaN(withdraw)==true){
        console.log("잘 못 입력하셨습니다. 숫자만 유효합니다");
    }
}

let account = 0;
account = Number(account);
let deposit = 0;
Number(deposit)
let withdraw = 0;
Number(withdraw);
let choice = -1;


console.log("안녕하세요 java505 은행입니다.");


while (true) {

    console.log("1: 입금, 2: 예금 확인, 3: 출금, 0: 종료");
    choice = prompt(`번호를 입력해주세요.`, "");
    // choice =Number(choice);
    if (choice == 1) {
        depositInMoney(choice)
    } else if (choice == 2) {
        accountCheck(choice);

    } else if (choice == 3) {
        withdrawOutMoney(choice)
    } else if (choice == 0) {
        if (choice == "") {
            console.log("잘 못 입력했습니다");
        }
        else {
            console.log("거래를 종료합니다");
            break;
        }
    } else {
        console.log("잘 못 입력했습니다");
    }
}
