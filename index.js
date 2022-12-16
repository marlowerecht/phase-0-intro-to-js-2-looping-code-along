// Code your solutions in this file

const messages = [];

const friends = ["Charlie", "Samip", "Ali"];

function writeCards(array, celebration) {
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${celebration} gift!`);
    }
    return messages;
}

function countDown(integer) {
    let number = integer;
    while (number >= 0) {
        console.log(number);
        number--;
    }
}