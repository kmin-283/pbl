(function (){
  // 어떠한 타입도 받을 수 있지만 리턴 타입을 예측할 수 없는 안좋은 예제
  const front = (arr: any[]) => arr[0];
  
  const firstOne = front([1,2,3,4,5,6,7]);
  console.log(firstOne); // 1
  
  // 어떠한 타입도 받을 수 있으면서 리턴 타입도 예측할 수 있는 좋은 예제
  
  const predictableFront = <T>(arr: T[]) => arr[0];
  
  const predictableFirstOne = predictableFront([1,2,3,4,5,6,7]);
  console.log(predictableFirstOne); // 1
  
  // generic을 활용하지만 조건이 있는 예제
  
  
  const getName = <K extends keyof T, T>(key: K, obj: T) => {
    return obj[key];
  };
  
  const person = {
    name: 'kmin',
    country: 'korea',
  };
  
  console.log(getName('name', person)); // kmin
  console.log(getName('country', person)); // korea
})();
