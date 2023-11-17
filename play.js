const person = {
    name: 'Tony',
    age: 45,
    greet () {
        console.log(`Hello, this is ${this.name}`);
    }
};

console.log(person);
person.greet()

const student = {
    name: 'Siddhesh',
    age: 25,
    intro () {
        console.log(`Hello, I am ${this.name} and I am ${this.age}`);
    }
};

student.intro();

const array = ['apple', 'oranges', '', 'mango', '', 'lemon'];

// for (let ele of array) {
//     console.log(ele);
// }

console.log(array.map(ele => {
    if (ele === '') {
        return 'empty string';
    }
    return ele;
}));
console.log(array)