//6. Quiz
var number = 2;
if ((number % 2) === 0) {
    console.log("even");
} else {
    console.log("odd");
}


//7. Quiz
var musicians = -1;
// your code goes here
if (musicians <= 0) console.log("not a group");
else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}


//8. Quiz
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (suspect === "Mr. Parkes" && room === "dining room") {
    weapon = "knife";
    solved = true;
} else if (suspect === "Ms. Van Cleve" && room === "gallery") {
    weapon = "trophy";
    solved = true;
} else if (suspect === "Mrs. Sparr" && room === "billiards room") {
    weapon = "pool stick";
    solved = true;
} else if (suspect === "Mr. Kalehoff" && room === "ballroom") {
    weapon = "poison";
    solved = true;
}

if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}


//12. Quiz:
var balance = 325.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance) {
    if (isActive && balance > 0) {
        console.log("Your balance is $" + balance + ".");
    } else {
        if (!isActive) {
            console.log("Your account is no longer active.");
        } else {
            if (balance === 0) {
                console.log("Your account is empty.");
            } else console.log("Your balance is negative. Please contact bank.");
        }
    }
} else console.log("Thank you. Have a nice day!");


//13. Quiz: Ice Cream
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}`);
}


//14. Quiz: What do I wear? (3-7)
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// Write your if/else code here
if (shirtWidth >= 18 && shirtWidth < 20 && shirtLength >= 28 && shirtLength < 29 && shirtSleeve >= 8.13 & shirtSleeve < 8.38) {
    console.log("S");
}
else if (shirtWidth >= 20 && shirtWidth < 22 && shirtLength >= 29 && shirtLength < 30 && shirtSleeve >= 8.38 & shirtSleeve < 8.63) {
    console.log("M");
}
else if (shirtWidth >= 22 && shirtWidth < 24 && shirtLength >= 30 && shirtLength < 31 && shirtSleeve >= 8.63 & shirtSleeve < 8.88) {
    console.log("L");
}
else if (shirtWidth >= 24 && shirtWidth < 26 && shirtLength >= 31 && shirtLength < 33 && shirtSleeve >= 8.88 & shirtSleeve < 9.63) {
    console.log("XL");
}
else if (shirtWidth >= 26 && shirtWidth < 28 && shirtLength >= 33 && shirtLength < 34 && shirtSleeve >= 9.63 & shirtSleeve < 10.13) {
    console.log("2XL");
}
else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
    console.log("3XL");
}
else {
    console.log("N/A");
}


//18. Quiz: Navigating the Food Chain
var eatsPlants = false;
var eatsAnimals = true;
var category = eatsAnimals ? (eatsPlants ? "omnivore" : "carnivore") : (eatsPlants ? "herbivore" : undefined);
console.log(category);


//21. Quiz: Back to School (3-9)
var education = "no high school diploma";

// set the value of this based on a person's education
var salary = 0;

// your code goes here

switch (education) {
    case "no high school diploma": {
        salary = 25636;
        break;
    }
    case "a high school diploma": {
        salary = 35256;
        break;
    }
    case "an Associate's degree": {
        salary = 41496;
        break;
    }
    case "a Bachelor's degree": {
        salary = 59124;
        break;
    }
    case "a Master's degree": {
        salary = 69732;
        break;
    }
    case "a Professional degree": {
        salary = 89960;
        break;
    }
    case "a Doctoral degree": {
        salary = 84396;
        break;
    }
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");