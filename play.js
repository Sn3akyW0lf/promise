// const person = {
//     name: 'Tony',
//     age: 45,
//     greet () {
//         console.log(`Hello, this is ${this.name}`);
//     }
// };

// console.log(person);
// person.greet()

const student = {
    name: 'Siddhesh',
    age: 25,
    intro () {
        console.log(`Hello, I am ${this.name} and I am ${this.age}`);
    }
};

// student.intro();

const copyStudent = {...student};
console.log(copyStudent)

const fruits = ['apple', 'oranges', '', 'mango', '', 'lemon'];

// for (let ele of array) {
//     console.log(ele);
// }

// console.log(fruits.map(fruit => {
//     if (fruit === '') {
//         return 'empty string';
//     }
//     return fruit;
// }));
// console.log(fruits)

// const copyFruits = [...fruits];
// console.log(copyFruits);


// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(2, 4, 8, 16));

const printName = ({ name }) => {
    console.log(name)
}

printName(student);