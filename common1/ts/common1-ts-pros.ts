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
})();
