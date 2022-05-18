//1. write a function that takes an array of numbers
// and return a new array with value doubled

// part1 write a function that doubles a number and test
/**
 * doubles a number
 * @param  {number} num
 * @return  {number} number times 2
 */
 const doubleNum = (num) => {
   return num * 2
  };
  
  // part 2 use the method from above to double numbers in new array
  /**
   * doubles numbers from given array into a new array
   * @param  {[number]} arr: an array of numbers to be doubled
   * @return {[number]} a NEW array with numbers doubled
   */
  const doubleArray = (arr) => {
    console.log(arr)
     let newArr = arr.map(doubleNum)
     console.log(newArr)
     return newArr
  };
  
  //2. write a function that takes an array of numbers
  // and return a new array with only the even ones
  
  // part1 write a function that takes number and return true if even
  /**
   * returns true if num is even false otherwise
   * @param  {number} a integer
   * @return  {boolean} true if number was even false otherwise
   */
  const isEven = (num) => {
      if(num % 2 == 0){
        return true
      } else {
        return false
      }
  };
  
  // part 2 use the method from above to double numbers in new array
  /**
   * doubles numbers from given array into a new array
   * @param  {[number]} arr: an array of numbers to be doubled
   * @return {[number]} a NEW array with numbers doubled
   */
  const filterEvens = (arr) => {
    let evenArr = []
    for (let i = 0; i < arr.length; i++) {
      if(isEven(arr[i]) == true){
        evenArr.push(arr[i])
      }      
    }console.log(evenArr)
    return evenArr
  };
  
  isEven;
  
  module.exports = {
    doubleNum,
    doubleArray,
    isEven,
    filterEvens,
  };
  