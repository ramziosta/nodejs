import * as readline from 'readline';
import {stdin as input, stdout as output} from 'process';

const rl = readline.createInterface({input, output});

function question(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    })
}

let userInput = await question('enter your equation: ');

while (userInput !== 'exit') {
    try {
        const value = eval(userInput);
        console.log("value: " + value);
    } catch (exception) {
        console.log("exception: ");
    }
    userInput = await question('enter your equation: ');
}

rl.close();

// function question() {
//     rl.question("Enter your simple equation: ", (input) => {
//         if (input === 'exit') {
//             rl.close();
//         } else {
//             try {
//                 const value = eval(input);
//                 console.log("value: " + value);
//             } catch (exception) {
//                 console.log("exception: ");
//             }
//             question();
//         }
//     })
// }
//
// question();

