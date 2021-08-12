// 'true'는 false

// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
console.log(true == "true"); // -> false
console.log(false == "false"); // -> false

// 'false' is not the empty string, so it's a truthy value
console.log(!!"false"); // -> true
console.log(!!"true"); // -> true

// null은 falsy이지만 false는 아니다.

console.log(!!null); // -> false
console.log(null == false); // -> false

console.log(0 == false); // -> true
console.log("" == false); // -> true

// 배열의 참거짓

console.log([] == '');   // -> true
console.log([] == 0);    // -> true
console.log([''] == ''); // -> true
console.log([0] == 0);   // -> true
console.log([0] == '');  // -> false
console.log([''] == 0);  // -> true
console.log([null] == '');      // true
console.log([null] == 0);       // true
console.log([undefined] == ''); // true
console.log([undefined] == 0);  // true
console.log([[]] == 0);  // true
console.log([[]] == ''); // true
console.log([[[[[[]]]]]] == ''); // true
console.log([[[[[[]]]]]] == 0);  // true
console.log([[[[[[ null ]]]]]] == 0);  // true
console.log([[[[[[ null ]]]]]] == ''); // true
console.log([[[[[[ undefined ]]]]]] == 0);  // true
console.log([[[[[[ undefined ]]]]]] == ''); // true