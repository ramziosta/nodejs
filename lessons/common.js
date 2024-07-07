/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question() {
    rl.question("Enter your simple equation: ", (input) => {
        if (input === 'exit') {
            rl.close();
        } else {
            try {
                const value = eval(input);
                console.log("value: " + value);
            } catch (exception) {
                console.log("exception: ");
            }
            question();
        }
    })
}

question();
*/


const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(person.name);