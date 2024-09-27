// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let i = 0
  let x = 0
  let valueFist = ""
  let valueSecond = ""
  for (i ; i < array1.length; i++) {
    valueFist += array1[i]
  }
  for (x ; x < array2.length; x++) {
    valueSecond += array2[x]
  }
  let newvalueFist = parseInt(valueFist, 10)
  let newvalueSecond = parseInt(valueSecond, 10)
  let total = newvalueFist + newvalueSecond
  return total
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let convertNumber = value.toString()
  let newArray = convertNumber.split('')
  let revertArray = newArray.reverse()
  let joinArray = revertArray.join('')
  
  return convertNumber === joinArray
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let mensage = ""
  let covertValue = Number(input)
  if (input == '' || input == undefined || input == null) {
    mensage = 'Required field'
  } else if (isNaN(covertValue) || covertValue <= 0) {
    mensage = 'Must be a number besides 0'
  } 

  return mensage

}