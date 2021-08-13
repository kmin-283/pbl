(function () {
  'use strict'
  let a = 10; 
  
  console.log(a); // 10
  a = "hello";
  console.log(a) // hello
  
  // 할당한 변수에 다른 타입의 값을 할당 가능
  
  function sum(a, b) {
    if (a < 0) {
      a *= -1;
    }
    return (a+b);
  }
  
  console.log(sum('hello', 'world')); // hello world
  
  function getName(person) {
    return person.name;
  }
  
  const person = {
    name: 'kmin',
    age: 27,
  };
  
  const noNamePerson = {
    age: 27,
  };
  
  console.log(getName(person)); // kmin
  console.log(getName(noNamePerson))  // undefined


  // 진짜 읽기만 가능한 const 배열
  const doctorList = ['doctor1', 'doctor2', 'doctor3', 'doctor4'];
  // const를 변경하려는 시도이므로 에러
  // doctorList = ['patient1', 'patient2', 'patient3', 'patient4'];

  doctorList.push('patient1'); // 가능
  console.log(doctorList); // ['doctor1', 'doctor2', 'doctor3', 'doctor4', 'patient1'];

  const ReadonlyDoctorList = ['doctor1', 'doctor2', 'doctor3', 'doctor4'];
  Object.freeze(ReadonlyDoctorList);
  
  ReadonlyDoctorList.push('patient1');
  console.log(ReadonlyDoctorList);
})();
