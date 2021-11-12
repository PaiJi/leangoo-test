function testNum(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizz buzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  }
  if (num % 5 === 0) {
    return "buzz";
  }
  return num;
}

const testTarget = 30000;

const result = [...Array(testTarget)].map((e, index) => testNum(index));
console.log(result);
