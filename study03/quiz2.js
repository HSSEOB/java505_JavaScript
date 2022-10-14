let count=0;
let arr1=[];
let num = prompt("몇 까지 3의 배수를 찾을까요?","");
for(let i=0; i<num;i++){
    arr1[i]=i+1;
    if(arr1[i]%3==0){
        console.log(arr1[i]);
        count++;
    }
}console.log(`${num}까지 3의 배수의 개수 : ${count}`);

