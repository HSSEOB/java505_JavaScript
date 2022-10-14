
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

let account = 0;
account = Number(account);
let deposit = 0;
Number(deposit)
let withdraw = 0;
Number(withdraw);
let choice= 0;



console.log("안녕하세요 java505 은행입니다.");


while(true){

    console.log("1: 입금, 2: 예금 확인, 3: 출금, 0: 종료");
    choice = prompt(`번호를 입력해주세요.`,"");

    if(choice==1){
        deposit= prompt(`얼마를 입금하시겠습니까?`,"");
        deposit = Number(deposit);
        console.log(`${deposit} 원을 입금했습니다.`);
        account = (account+deposit);
    }

    else if(choice==2){
        console.log(`현재 계좌의 잔액은 ${account} 원 입니다.`);

    }

    else if(choice==3){
        withdraw = prompt(`얼마를 출금 하시겠습니까?`,"");
        withdraw = Number(withdraw);
        if(account>=withdraw){
            console.log(`${withdraw}원을 출금합니다. 계좌의 남은 잔액은 ${account-withdraw} 원 입니다. `);
            account = account-withdraw ;}
            else if (account<withdraw)
            {console.log("잔액이 부족합니다.");}
    }

    else if(choice==0){
        console.log("거래를 종료합니다");
        break;
    }
    
    else{console.log("잘 못 입력했습니다");}
}

