/* 3. Quiz */
var umbrella = {
    color: "pink",
    isOpen: true,
    open: function () {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function () {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    }
};


/* 8. Quiz */
var breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};


/* 9. Quiz */
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function () {
        return `Welcome!\nYour balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`;
    }
};

console.log(savingsAccount.printAccountSummary());



/* 11. Quiz */
var facebookProfile = {
    name: "Zhaolong Wang",
    friends: 0,
    messages: [],
    postMessage: function (message) {
        this.messages.push(message);
    },
    deleteMessage: function (index) {
        this.messages.splice(index, 1);
    },
    addFriend: function () {
        this.friends++;
    },
    removeFriend: function () {
        this.friends--;
    }
}

/* 12. Quiz */
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(value => { console.log(value.type + " donuts cost $" + value.cost + " each"); });