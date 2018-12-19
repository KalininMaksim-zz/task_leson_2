let str = `position:fixed; border:1px solid red; color: red;` /*{position: 'fixed',border: '1px solid red',color: 'red' }*/

function styleToObj(str) {
  let result = {};
  let arr = [];

  arr = str.split(';');

  for (let i = 0; i < arr.length - 1; i++) {
    let myArr = arr[i].split(':')

    result[myArr[0]] = myArr[1];
  }
  return result;
};
console.log(styleToObj(str))