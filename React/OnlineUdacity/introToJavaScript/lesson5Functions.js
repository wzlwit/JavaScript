//5. Quiz
function laugh() {
    return "hahahahahahahahahaha!";
}
console.log(laugh());


//6. Quiz
function laugh(num) {
    var s = "";
    for (let i = 0; i < num; i++) {
        s += "ha";
    }
    return s + "!";
}
console.log(laugh(3));


//16. Quiz
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(line) {
    var shape = "";
    for (let i = 1; i <= line; i++) {

        shape += (makeLine(i));
    }
    return shape;
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));


/* 20 Quiz: Laugh */
var laugh = function (times) {
    var s = "";
    for (let i = 1; i <= times; i++) {
        s += "ha";
    }
    s += "!"
    return s;
}/* finish the function expression */

console.log(laugh(10));


/* 21. Quiz: Cry */
var cry = function ha() {
    return "boohoo!";
}

console.log(cry());


/* 22. Quiz: Inline */
emotions("happy", function (times) {
    var s = "";
    for (let i = 1; i <= times; i++) {
        s += "ha";
    }
    return s += "!";
});