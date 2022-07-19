// task 1
function evenNumbers() {
  const evens = [];
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
}
console.log(evenNumbers());

// task 2
const nums = [12, 445, 2342, 12, 123, 18];
nums.reverse();
console.log(nums);

//task - 7
const arr = [-1, -2, 8, 78, -45, 1, -90];
function getNagetivenums(numbers) {
  return numbers.filter((negative) => negative < 0);
}
console.log(getNagetivenums(arr));

// task - 6
const numbers = [34, 12, 58, 13, 90];
const aceSort = numbers.sort((a, b) => a - b);

console.log(aceSort);

// task - 9
const booleanNumber = (num) => {
  return num % 10 === 0 ? true : false;
};

console.log(booleanNumber(30));
//TESt
