(function () {
  console.log('hello');
  console.log(123);
  console.log(true);

  const variable = '변수';
  const easy = '쉽게';
  console.log(`문장을 ${variable}과 같이 ${easy} 쓸 수 있어요`);
  
  const person = {
    name: 'kmin',
    age: 27
  };
  console.log(person);
  
  const arr = [1, 2, 3, 4,'javascript', false];
  console.log(arr);

  const importantInfomation = 'very important infomation';
  console.info(importantInfomation);

  const seriousError = 'very serious error';
  console.error(seriousError);
})();
