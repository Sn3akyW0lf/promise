const obj1 = {'key1': 1, 'key2': 2, 'key3': 1000};
let {key1, key3} = obj1;
console.log(key1, key3);
const arr1 = ['value1', 'value2', 'value3'];

const [val1, val3] = arr1;
key1 = 20;
key3 = 123;

// if (obj2 === obj1){
//     console.log('same objects');
// } else {
//     console.log('different objects');
// }

console.log(obj1.key1, obj1.key3);
console.log(key1, key3);
console.log(val1);
console.log(val3);
// console.log(obj2);
