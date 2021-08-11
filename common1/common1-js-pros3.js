// 함수를 변수에 할당
const add = (a, b) => a+b;

console.log(add(2,3)); // 5;

// 다른 함수의 인자로 전달

const double = (addFunc, a, b) => 2*addFunc(a,b); 

console.log(double(add, 2,3)); // 10;

// 다른 함수의 결과로 리턴

const multiply3 = (addFunc) => (a,b) => 3*addFunc(a,b);

const addAndtriple = multiply3(add);

console.log(addAndtriple(2,3)); // 15;

// 고차함수의 장점

const lst = [1,2,3,4,5,6];

const wrapper = (func, arr) => {
    return arr.filter(func)
        .reduce((prev, curr) => prev+curr);
}

const evenNumberSum = wrapper((value) => value%2 === 0, lst);
const oddNumberSum = wrapper((value) => value%2 !== 0, lst);

console.log(evenNumberSum); // 12
console.log(oddNumberSum); // 9