// var $m;
// console.log($m);
// for(var a=0;a<200;a++){
//     debugger;
//     console.log(a);

// }

//with map we can chain methods like reduce(),sort(),filter() but we can't do it with forEach, forEach returns undefined and map returns transformed array 

//Reduce method used for resulting single value, and flatten array
//reduce(accumulator,currentValue,index,sourceArray)

// let arr = [5,6,2]


// let sum = arr.reduce((accumulator,currElem,index,arr)=>{
//     debugger;
//     return accumulator+=currElem;
// },7)

// console.log(sum);

// substring and slice :=> substrinig doesnot accept -ve value substring(8,-x) => 0 to 8 of string
//substr(-x) last x character of string replac()

// console.log('aabbcc'.replaceAll('b', '.')); no method
// 'aa..cc'

//oops in js

console.log(this);
