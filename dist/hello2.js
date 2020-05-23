"use strict";
function greeter(person) {
    return "Hello, " + person;
}
var user = "insamdev-1";
var result = greeter(user);
console.log(result);
// tsc
// node dist/hello2.js
