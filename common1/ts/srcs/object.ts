(function () {

    interface Person {
      age: number;
      phone_number: string;
      name: string;
    }

    function printPerson(person: Person): void {
        console.log(person.age);
        console.log(person.phone_number);
        console.log(person.name);
    }
    
    const person: Person = {
      age: 10,
      phone_number: "010-1234-5678",
      name: "kmin",
    };
  
    console.log(printPerson(person)) // 10, 010-1234-5678, kmin
  })();
  