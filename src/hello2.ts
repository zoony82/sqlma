function greeter(person:any) {
    return "Hello, " + person;
}


let user = "insamdev-1";
const result = greeter(user);

console.log(result)

// tsc hello2.ts
// node hello2.js