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
