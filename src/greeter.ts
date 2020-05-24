class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }
  
  interface Person {
    firstName: string;
    lastName: string;
  }
  
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
  
  let user = new Student("Jane", "M.", "User");
  
  // document.body.textContent = greeter(user);
  // console.log("test alert!");

  var http = require('http');
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(greeter(user) );
  }).listen(8080, '127.0.0.1');
  console.log('Server running at http://127.0.0.1:8080/');