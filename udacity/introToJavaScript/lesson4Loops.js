//4. Quiz: JuliaJames
var x = 1;

while (x <= 20) {
    console.log((x % 3 === 0) ? ((x % 5 === 0) ? "JuliaJames" : "Julia") : ((x % 5 === 0) ? "James" : x));
    x++;
}


//5. Quiz: Bottles
var num = 99;

function pluralized(x) {
    if (x >= 0) {
        return x > 1 ? "bottles" : x === 1 ? "bottle" : "bottles";
    }
}

while (num > 0) {
    console.log(`${num} ${pluralized(num)} of juice on the wall! ${num} ${pluralized(num)} of juice! Take one down, pass it around... ${--num} ${pluralized(num)} of juice on the wall!`)
}


//6. Quiz: Countdown, Liftoff!
var count = 60;
while (count >= 0) {
    if (count === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (count === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (count === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (count === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (count === 6) {
        console.log("Main engine start");
    } else if (count === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log(`T-${count} seconds`);
    }
    count--;
}


//11. Quiz
for (let x = 9; x >= 1; x--) {
    console.log("hello " + x);
}


//12. Quiz
for (var x = 5; x < 10; x++) {
    console.log(x);
}


//13. Quiz
for (var k = 0; k < 200; k++) {
    console.log(k);
}


//14. Quiz: Factorials
var solution = 1;
for (var i = 2; i <= 12; i++) {
    solution *= i;
}
console.log(solution);


//15. Quiz:
for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 100; j++) {
        console.log(i + "-" + j);
    }
}