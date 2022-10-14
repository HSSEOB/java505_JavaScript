console.log("-----전역 변수 / 지역 변수 -----\n");

// 전역 변수 : 프로그램 전체에서 접근이 가능한 변수
// 지역 변수 : 코드 블럭 내에서 선언되고 사용 후 삭제되는 변수.

let gValue = 100;
console.log(`전역 변수 : ${gValue}`);

// 전역 변수를 함수 안에서 사용하는 것은 문제 없다.
function func1(){
    console.log(`함수 func1에서 사용한 gValue : ${gValue}`)
    }

// 지역 변수는 함수(코드블럭) 안에서 선언하고 사용하는 것은 문제가 없다.
function func2(){
    let lValue = 10;
    console.log(`함수 func2에서 사용한 lValue : ${lValue}`);
}

// 함수 안에서 지역 변수 선언 시 전역 변수와 동일한 이름을 사용하면 지역변수가 우선 순위를 가진다.
// 따라서 아래에서의 gValue는 전역변수 gValue와 이름만 같은 지역변수이다.
function func3(){
    let lValue = 10;
    let gValue = 20;
    console.log(`함수 func3에서 사용한 lValue : ${lValue}`);
    console.log(`함수 func3에서 사용한 gValue : ${gValue}`);
}

    func1();
    func2();
    func3();

    console.log();

// 특정 함수 안에서 전역 변수와 같은 이름을 선언 했더라도 해당 함수 밖에서는 지역변수를 사용 할 수 없다. 따라서 아래의 함수는
// 지역변수 gValue를 부른게 아니라 전역변수 gValue를 호출 한 것이다.
    console.log(`함수 밖에서 사용한 gValue : ${gValue}`);

    console.log();

    // 지역 변수를 함수 (코드블럭) 밖에서 호출하는 것은 불가능 함
    // 지역 변수는 해당 함수(코드블럭)의 실행이 종료되면 메모리에서 삭제된다.
    // console.log(`함수 밖에서 사용한 lValue : ${lValue}`);