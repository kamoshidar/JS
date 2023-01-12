let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(numb) {
    let num = numb;
    console.log(num);
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 === 0){
            console.log(num[i] + 'は偶数です');
        }
    }
}
isEven(numbers);

//問2
class Car{
    constructor(gass, num){
        this.gass = gass;
        this.num = num;
    }
    getNumgass(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);
    }
}
let gasorin = new Car('○○', '△△');
gasorin.getNumgass();
