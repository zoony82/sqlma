class Student {
    fullName : string;
    constructor(public firstName : string, public publicName : string, public lastName : string){
        this.fullName = firstName + " " + publicName + " " + lastName
    }
}

interface Person {
    firstName : string;
    lastName : string;
}

function greeter(person:Person) {
    return "Hello, " + person.lastName + " " + person.firstName;
}

var user = {firstName:"준희", lastName:"장"}
document.body.innerHTML = greeter(user);

var student = new Student("준희","인삼", "장")
document.body.innerHTML =  greeter(student);

// open hello2.html

// console.log(result)
// document.body.textContent = result
// document.body.innerHTML = result

// tsc
// node dist/hello2.js

// open hello2.html