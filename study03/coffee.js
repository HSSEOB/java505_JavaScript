
let coffee = 10;
let money = 0;
let cOrderNum = 0;
let money1 = 0;
let result = false;

money = prompt(`얼마를 넣을까요?`,"");
money = Number(money);

//for(;;){} => for문의 무한반복
while(true) {
    console.log(`현재 커피가 ${coffee}잔 남아 있습니다.`);

    cOrderNum = prompt("커피를 몇 잔 주문할까요?", "");
    cOrderNum = Number(cOrderNum);


    if (coffee >= cOrderNum && money >= (300 * cOrderNum)) {
        console.log(`커피를 ${cOrderNum}잔 판매합니다.\n 남은 커피 ${coffee - cOrderNum}잔 `);
        coffee = coffee - cOrderNum;
        money = money - (300 * cOrderNum);

        if (money >= coffee * 300 && coffee > 0) {
            result = confirm("커피를 더 주문하시겠습니까?")
            if (result == true) {
                continue;
            }else{console.log("잔액을 반환합니다");
            break;
            }



        }


    } else if (money < 300 * cOrderNum) {
        console.log("잔액이 부족합니다.");
        result = confirm("돈을 더 넣으시겠습니까?");
        if (result == true) {
            money1 = prompt(`얼마를 넣을까요?`, "");
            money1 = Number(money1);
            money = money + money1;
        } else {
            console.log("남은 잔액을 반환합니다.");
            break;
        }
    }
    if (coffee == 0) {
        console.log(`커피가 다 팔렸습니다.`);
        break;
    }


    if (coffee < cOrderNum) {
        console.log(`현재 커피가 ${cOrderNum - coffee}잔 부족합니다.`);
        result = confirm("주문을 수정하시겠습니까?");
        if (result == true) {
            continue;
        } else {
            console.log("남은 잔액을 반환합니다.");
            break;

        }
    }
}
