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
