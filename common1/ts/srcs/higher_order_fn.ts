(function (){
    // 함수를 변수에 할당
    const add = (a: number, b: number): number => a+b;
    
    console.log(add(2,3)); // 5;
    
    // 다른 함수의 인자로 전달
    
    const double = (addFunc: (a: number, b: number) => number,
    a: number, b: number): number => 2*addFunc(a,b);
    
    console.log(double(add, 2,3)); // 10;
    
    // 다른 함수의 결과로 리턴
    
    const multiply3 = (addFunc: (a: number, b: number) => number): (a: number, b: number) => number =>
    (a: number, b: number): number => 3 * addFunc(a, b);

    // 위와 같은 함수
    // function multiply3 (addFunc: (a: number, b: number) => number): (a: number, b: number) => number {
    //   return function (a: number, b: number): number {
    //     return 3 * addFunc(a, b);
    //   }
    // }
    
    const addAndtriple = multiply3(add);
    
    console.log(addAndtriple(2,3)); // 15;
    
    // 고차함수의 장점
    
    const lst = [1,2,3,4,5,6];
    
    const getSum = (func: (value: number) => void, arr: number[]): number => {
        return arr.filter(func)
            .reduce((prev, curr) => prev+curr);
    }
    
    const evenNumberSum = getSum((value: number) => value % 2 === 0, lst);
    const oddNumberSum = getSum((value: number) => value % 2 !== 0, lst);
    
    console.log(evenNumberSum); // 12
    console.log(oddNumberSum); // 9
})();