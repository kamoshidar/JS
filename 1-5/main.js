function createjuice(fruits){
    let fruits_1 = fruits + "ジュース";
    console.log(`${fruits}を受け取りました。ジュースにして返します。`);
    return fruits_1;
}
let orangejuice = createjuice("みかん");
console.log(`${orangejuice}が届きました。`);

