function greeter(person:any) {
    return "Hello, " + person;
}


let user = "insamdev-1";
const result = greeter(user);

console.log(result)

// tsc
// node dist/hello2.js