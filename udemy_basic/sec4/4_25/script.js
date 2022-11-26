/**
 * mapやfilterについて
 */


const  nameArr = ["田中", "山田", "kohta"];

for (let index = 0; index < nameArr.length; index ++) {
    console.log(nameArr[index]);
}


const nameArr2 = nameArr.map((name) =>{
    return name;
})

console.log(nameArr2);


nameArr2.map((name) => console.log(name));



// filterについて
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
});
console.log(newNumArr);
