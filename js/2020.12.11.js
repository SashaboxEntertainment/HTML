// console.log(typeof 6);
// console.log(typeof "str");
// console.log(typeof null);

let obj = {};

let capitals = {
    Monaco: "Monaco",
    "Российская Федерация": "Москва",
    Ukraine: "Kyiv",
    France: "Paris"
}

capitals.Italy = "Rome";
capitals.France = "Marseille";

console.log(capitals.Italy);
console.log(capitals.France);

delete capitals.Monaco;
console.log(capitals);

let cntr = "Российская Федерация";
console.log(capitals.cntr);
console.log(capitals[cntr]);

for (let key in capitals) {
    console.log("Country is " + key + ", capital is " + capitals[key]);
}

function other() {
    //
}

const getNumber = function(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numbers = {};

for (let i = 0; i < 100; i++) {
    let n = getNumber();
    if (numbers[n]) {
        numbers[n] += 1;
    } else {
        numbers[n] = 1;
    }
}
console.log(numbers);
