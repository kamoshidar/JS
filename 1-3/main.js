//問1
const a = 15;
if(a >= 10 || a <= 20 ){
    if(a % 2 === 0){
        console.log("10以上かつ20未満かつ偶数です。");
    }else{
        console.log("条件に当てはまらない。");
    }
}

//問2
const x = 10;
if(x >= 10 && x <= 20){
    console.log("成功です。");
}else{
    console.log("失敗です。");
}




//問3(1)
const y = 0;
if(y % 2 !== 0){
    console.log("奇数です。");
}else{
    console.log("偶数です。");
}

//問3(2)
const yy = 0;
if (yy % 2 === 0) {
    console.log("偶数です。");
}
if (yy % 2 !== 0) {
    console.log("奇数です。");
}