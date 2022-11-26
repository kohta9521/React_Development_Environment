/**
 *  分割代入
 */

const  myProfile = {
    name: "kohta",
    age: 28,
}

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);



//  分割代入の書き方

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);