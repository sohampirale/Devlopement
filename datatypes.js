// const v1=23
// let v2 =34
// var v3 = 'c'
// const v4 = 45
// v5=null
// let v6;
// v7 = null
// v8 = "heyy"
// v9=v1
// v9=37
// console.log(v5);
// console.log(typeof v5);
// console.log(typeof v6);
// console.log(typeof v7);
// console.log(typeof undefined);
// console.log(typeof null);
// console.table([v1,v2,v3,v4,v5,v6,v7,v8])

let v1=123
let v2="123abc"
let v3="abc"
let v4=NaN
let v5=null
let v6=undefined
let v7=true
console.log(typeof v4);

let n1=Number(v1)
let n2=Number(v2)
let n3=Number(v3)
let n4=Number(v4)
let n5=Number(v5)
let n6=Number(v6)
let n7=Number(v7)
//true -> 1 false -> 0
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);
console.log(typeof n4);
console.log(typeof n5);
console.log(typeof n6);
console.log(typeof n7);

//null -> 0
//others Nan if not possible 
//if possible then converted 
//BUT all are made to type number regardless !

console.table([n1,n2,n3,n4,n5,n6,n7])

