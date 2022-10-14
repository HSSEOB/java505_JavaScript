console.log("--------연산자--------\n");

a= 10;
b= 3;

console.log("원본 변수 a : " + a + ",\tb : " + b);

console.log("a + b = " +(a + b));
console.log("a - b = " +(a - b));
console.log("a - b = " + a * b);
console.log("a - b = " + a / b);
console.log("a % b = " + a % b);
console.log("a ** b = " + a ** b);
console.log("a * a * a = " + a * a * a);

console.log('');

console.log("\n--------증감 연산자--------\n");

a++;
console.log("a++ = "+ a);
++a;
console.log("++a = "+ a);
--a;
console.log("--a = "+ a);
a--;
console.log("a-- = "+ a);

console.log("\n--------할당 연산자--------\n");

console.log("a = 100 : " + (a = 100));
console.log("a += 10 : " + (a += 10));
console.log("a -= 10 : " + (a -= 10));
console.log("a *= 2 : " + (a *= 2));
console.log("a /= 2 : " + (a /= 2));
console.log("a %= 3 : " + (a %= 3));
console.log("a **= 2 : " + (a %= 2));

console.log("\n--------연결 연산자--------\n");

c= "문자열" + "연결" + "연산자";
console.log("문자열 + 연결 + 연산자 : " + c );


a = 10;
b = 3;



console.log("\n--------비교 연산자--------\n");

console.log("10 == 5 : " + (10 == 5));
console.log("10 > 5 : " + (10 > 5));
console.log("10 >= 5 : " + (10 >= 5));
console.log("10 < 5 : " + (10 < 5));
console.log("10 <= 5 : " + (10 <= 5));
console.log("10 != 5 : " + (10 != 5));

// 자바스크립트에서는 간소화된 문법을 사용하기에 문자열 데이터 타입의 숫자와 숫자 데이터 타입의 숫자 사이의 비교 연산이 가능함
// ==, =!,===, !==의 차이점은 ==, !=은 데이터 타입을 확인하지 않으나
// ===와 !==은 데이터 타입과 데이터 값 모두 확인하여 비교 연산한다.

console.log("'5' == 5 : " + ('5' == 5));
console.log("'5' === 5 : " + ('5' === 5));
console.log("'5' != 5 : " + ('5' != 5));
console.log("'5' !== 5 : " + ('5' !== 5));

console.log("10 > 5 && '5' == 5 : " + (10 > 5 && '5' === 5));
console.log("10 > 5 || '5' == 5 : " + (10 > 5 || '5' === 5));
console.log("!('5' != 5) : " + (!('5' != 5)));

console.log("\n--------클래스,타입 비교 연산자--------\n");

// typeof : 지정한 변수의 데이터 타입을 확인
console.log("typeof a : " + (typeof a));
a = "자바스크립트"
console.log("typeof a : " + (typeof a));

// instanceof: 지정한 변수가 지정한 클래스의 객체인지 확인
let time = new Date();
console.log("instanceof : " + (time instanceof Date));


// 연산자 우선 순위
// 1- () : 관호
// 2- [] : 멤버, . : 멤버 , ?. : 선택적 체이닝, () : 함수호출
// 3- new
// 4- ++, --, !, ~, typeof, void, delete
// 5- ** , *, /, %
// 6- +, -
// 7- <<, >>, >>>  : 비트 연산
// 8- in, instanceof, <, <=< >, >=, ==, ===, !=, !==
// 9- &, ^, |
// 10- &&, ||, ? :
// 11- =, +=, -=, *=, /=, %=, **=