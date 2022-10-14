// 문제 7. 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하라
// 1. money, coffee, price의 초기값을 설정하는 함수 생성 coffeeSetup
// 2. 커피 판매 부분을 함수로 생성. coffeeSale


let cOrderNum = 0;
let money1 = 0;
let result = false;

// 함수의 반환값은 1개만 가능하다
function coffeeSetup(coffee, money, price){
    coffee = Number(coffee);
    money = Number(money);
    price = Number(price);

    // function coffeeSetup(){
    //     let coffee = prompt("초기 커피 셋팅값");
    //     let money = prompt("얼마 넣을꺼?");
    //     let price = prompt("잔당 가격");



    // 반환값 3개 받는 방법 -
    // return [coffee, money, price]; // 배열 방법
    // return {coffee: coffee, money: money, price: price}; // 오브젝트 방법
}


function coffeeSale(){
    while(true) {
        console.log(`현재 커피가 ${coffee}잔 남아 있습니다.`);

        cOrderNum = prompt("커피를 몇 잔 주문할까요?", "");
        cOrderNum = Number(cOrderNum);


        if (coffee >= cOrderNum && money >= (price * cOrderNum)) {
            console.log(`커피를 ${cOrderNum}잔 판매합니다.\n 남은 커피 ${coffee - cOrderNum}잔 `);
            coffee = coffee - cOrderNum;
            money = money - (price * cOrderNum);

            if (money >= coffee * price && coffee > 0) {
                result = confirm("커피를 더 주문하시겠습니까?")
                if (result == true) {
                    continue;
                }else{console.log("잔액을 반환합니다");
                    break;
                }



            }


        } else if (money < price * cOrderNum) {
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

}
//
// let obj = {};
// obj = quiz7Setup();


let coffee = prompt("기초 커피 셋팅 값","");
let money = prompt("최초 투입 금액","");
let price = prompt("잔 당 커피 가격","");

coffeeSetup(coffee,money,price);
coffeeSale();


//for(;;){} => for문의 무한반복

