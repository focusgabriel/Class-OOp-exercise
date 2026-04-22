// let age = 25;
// var name = "Ayo";

// console.log(age);
// console.log(name);

 /*class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }
    login(){
        console.log(`${this.email} has logged in.`);
    }
    logout(){
        console.log(`${this.email} has logged out`);
    }
}

const userOne = new User("Alice", "alice@example.com");
const userTwo = new User("Bob", "bob@example.com");

console.log(userOne.username);
console.log(userOne.logout()); */


class BankAccount{
    #balance;

    constructor(owner, initialBalance){
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited ${amount}.`);
        } else {
            console.log("Deposit amount must be positive. ");
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const myAccount = new BankAccount("charles", 1000);
// console.log(BankAccount.owner)
myAccount.deposit(100);
console.log(myAccount.getBalance()) 


class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed
    }

    bark(){
        console.log(`${this.name} says woof!`);
    }
}

const myDog = new Dog("Rex", "German Shepherd");

myDog.eat();


myDog.bark();

