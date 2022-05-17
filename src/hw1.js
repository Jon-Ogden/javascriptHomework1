//function that takes a number and doubles it
// yarn jest -t 'test doubleNumber'
const doubleNumber = (num) => {
      return num * 2
};

/// function that takes a number and returns 'odd' or 'even'
// yarn jest -t 'test isOddOrEven'
const isOddOrEven = (num) => {
      if(num % 2 === 0){
        return 'even'
      } else {
        return 'odd'
      }
};

//function that return a random number 0-5
// yarn jest -t 'test randomNumber'
const randomNumber = () => {
  return Math.floor(Math.random() *6)
};

/// function that takes two numbers num and 'opp'
/// opp can be +, -, /, or *
// yarn jest -t 'test randomNumber'
const calc = (num1, num2, opp) => {
  if (opp == '+') {
    return num1 + num2;
}
else if (opp == '-') {
    return num1 - num2;
}
else if (opp == '*') {
    return num1 * num2;
}
else {
    return num1 / num2;
}};

//function that takes a string and return the number of vowels it has
// *lowercase only, and never count y
// yarn jest -t 'test vowelCount'
const vowelCount = (str) => {
  let arr1 = str.split('')
  var count = 0
  for (let i = 0; i < arr1.length; i++) {
      if(arr1[i] == 'a'){
          count++
      } else if (arr1[i] == 'e'){
          count++
      } else if (arr1[i] == 'i'){
          count++
      } else if (arr1[i] == 'o'){
          count++
      } else if (arr1[i] == 'u'){
          count++
      }} return count
};

/// function that takes an array of numbers and returns sum
// yarn jest -t 'test getSum'
const getSum = (numbers) => {
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
  } return total
};

/// function that takes an array of numbers and returns highest num
// yarn jest -t 'test getHighNum'
const getHighNum = (numbers) => {
  let highest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > highest){
      highest = numbers[i]
    }} return highest
};
/// function that takes an array of numbers and returns lowest num
// yarn jest -t 'test getLowNum'
const getLowNum = (numbers) => {
  let lowest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < lowest){
      lowest = numbers[i]
    }} return lowest
};
/// function that takes an array of numbers and returns true if sorted (low to high only)
// yarn jest -t 'test isSorted'
const isSorted = (numbers) => {
  let original = [...numbers]
  let sorted = numbers.sort(function(a,b){return a - b});
  console.log(sorted)
  console.log(original)
  if(original.join('') == sorted.join('')){
    return true
  } else{ return false 
}};

//  write a function that takes a number (0-100)
//  return 'fizz' if only divisible by 3
//  return 'buzz' if only divisible by 5
//  return 'fizzbuzz' if divisible by  3 and 5
//  return the number if none apply
// yarn jest -t 'test fizzbuzz'
const fizzbuzz = (num) => {
    if(num % 3 == 0 && num % 5 == 0){
      return 'fizzbuzz'
    } else if(num % 3 == 0){
      return 'fizz'
    } else if(num % 5 == 0){
      return 'buzz'
    } else { return num }
};

module.exports = {
  doubleNumber,
  vowelCount,
  isOddOrEven,
  calc,
  getHighNum,
  getLowNum,
  getSum,
  isSorted,
  fizzbuzz,
  randomNumber,
};