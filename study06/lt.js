// 문제 1) Math.random()를 사용하여 로또 번호 생성 프로그램을 작성하세요
// Math.floor((Math.random() * 45) + 1)
let lotto = [];

for (let i = 0; i < 7; i++) {
    const rnd = Math.floor((Math.random() * 7) + 1);

    let j = 0;
    do {
        if (rnd == lotto[j]) {
            i--;
            break;
        }
        lotto[i] = rnd;
        j++;
    } while (j < i);
    // for (let j = 0; j < i; j++) {
    //     if (rnd == lotto[j]) {
    //         i--;
    //         break;
    //     }
    //     lotto[i] = rnd;
    // }

    // if (i == 0) {
    //     lotto.push(rnd);
    // }
}

for (let i = 0; i < lotto.length; i++) {
    if (i == lotto.length -1) {
        console.log(`이번주 보너스 번호는 : ${lotto[i]}`)
    }
    else {
        console.log(`이번주 당첨 번호는 : ${lotto[i]}`)
    }
}
