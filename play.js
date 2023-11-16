const name = 'Max';
let age = 29;
const hasHobbies = true;

// name = 'Tony';
age = 35;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return `Name is ${userName}, age ${userAge} and user has hobbies: ${userHasHobbies}`;
}

const prod = (a, b) => a * b;

console.log('Product: ' + prod(4, 8));

console.log(summarizeUser(name, age, hasHobbies));

