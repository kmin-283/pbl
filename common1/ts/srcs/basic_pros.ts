(function (): void {
  let a: number = 10; // 변수 할당 방법
  
  function sum(a: number, b: number): number { // 함수 선언 방법
    if (a < 0) { // 조건문 작성 방법
      a *= -1;
    }
    return (a+b);
  }
  
  console.log(sum(5,5)); // 출력 방법
  
  for (let i=0; i<10; i++) { // 반복문 작성 방법
    console.log(i);
  }

  const person = {
    name: 'kmin',
    age: 27,
    country: 'korea',
  };

  for (const value in person) { // 객체를 순회하는 반복문
    console.log(value); // kmin 27 korea
  }

  const arr = [1, 'hello', false];
  /* 반복 가능한 객체
  (Array, Map, Set, String, TypedArray, arguments)
  를 순회하는 반복문 */
  for (const value of arr) {
    console.log(value);
  }

  // 진짜 읽기만 가능한 const 배열
  const doctorList = ['doctor1', 'doctor2', 'doctor3', 'doctor4'];
  // const를 변경하려는 시도이므로 에러
  // doctorList = ['patient1', 'patient2', 'patient3', 'patient4'];

  doctorList.push('patient1'); // 가능
  console.log(doctorList); // ['doctor1', 'doctor2', 'doctor3', 'doctor4', 'patient1'];

  const ReadonlyDoctorList: Readonly<string[]> = ['doctor1', 'doctor2', 'doctor3', 'doctor4'];
  
  // ReadonlyDoctorList.push('patient1');
  console.log(ReadonlyDoctorList);
})();