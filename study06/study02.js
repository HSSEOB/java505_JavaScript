console.log('----- date 객체 사용하기 -----');

let now = new Date();

console.log(now);
console.log(now.toLocaleString());
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getUTCFullYear());

console.log();

console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

console.log();

console.log(`현재 시간 : ${now.getHours()}`);
console.log(`현재 UTC 시간 : ${now.getUTCHours()}`);
console.log(`현재 분 : ${now.getMinutes()}`);
console.log(`현재 초 : ${now.getSeconds()}`);

console.log("\n----- Mate 객체 사용하기 -----\n");

console.log(`PI : ${Math.PI}`);

let result = 10/3;
console.log(` 10/3을 그대로 출력 시 : ${result}`);
console.log(` 10/3의 소수점 올림 : ${Math.ceil(result)}`);
console.log(` 10/3의 소수점 버림: ${Math.floor(result)}`);
console.log(` 10/3의 소수점 n 자리 반올림: ${Math.round(result)}`);
console.log(` 10/3의 소수점 반올림: ${Math.round(3.7)}`);
console.log(` 매개변수 중 최대 값 선택하기: ${Math.max(10,20,30,100)}`);
console.log(` 매개변수 중 최소 값 선택하기: ${Math.min(1,10,30,40,100)}`);
console.log(` 랜덤 숫자 발생: ${Math.floor(Math.random())}`);
// console.log(` : ${}`);
// console.log(` : ${}`);
// console.log(` : ${}`);

// 문제 1) Math.random()를 을 사용하여 로또 번호 생성 프로그램을 작성하세요.
// Math.round(Math.random()*45+1)
//
// let lotto = new Array(7);
//
// for(let i=0; i<7; i++){
//     lotto[i] = Math.floor(Math.random()*6+1)
//     for(let j=1; j<7; j++){
//         lotto[j] = lotto[j] = Math.floor(Math.random()*6+1)
//         if(lotto[i]==lotto[j]){
//             i--; break;};
//     }
//
//
//     console.log(`${lotto[i]}`);
// }




