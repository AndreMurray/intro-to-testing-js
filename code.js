// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(input === ""){
        return input
    }
    if (input === false) {
        return "Hello, World!"
    } else {
        return `Hello, ${input}!`
    }

}

function isFive(num) {
    if(num == 5) {
        return true
    } else {
        return false
    }

}

function isEven(num) {
    return num % 2 === 0
}

function isVowel(letter) {
    let vowelArray = ["a", "i", "o", "e", "u", "A", "I", "O", "E", "U", ];
    // let lowerCase = letter.toLowerCase();

    for(let i = 0; i < vowelArray.length; i++){
        if(vowelArray.includes(letter)){
            return true;
        } else {
            return false
        }
    }
    // if(["a", "i", "o", "e", "u"].indexOf(letter.toLowerCase()) === -1) {
    //     return false
    // } else {
    //     return true
    // }
}

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}
