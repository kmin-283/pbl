(function () {
  let a = 10; // 변수 할당 방법

  function sum(a, b) { // 함수 선언 방법
    if (a < 0) { // 조건문 작성 방법
      a *= -1;
    }
    return (a+b);
  }

  console.log(sum(5,5)); // 출력 방법 결과값: 10

  for (let i=0; i<10; i++) { // 기본적인 반복문 작성 방법
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

  const arr = [1, "hello", false];
  /* 반복 가능한 객체
  (Array, Map, Set, String, TypedArray, arguments)
  를 순회하는 반복문 */
  for (const value of arr) {
    console.log(value);
  }
})();