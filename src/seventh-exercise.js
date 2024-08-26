// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {

    let needWallet;
    if (kind == 'car' || kind == 'truck') {
      needWallet = true
    } else {
      needWallet = false
    }
  
    return needWallet
  }
  
  /**
   * Helps choosing between two options by recommending the one that
   * comes first in dictionary order.
   *
   * @param {string} option1
   * @param {string} option2
   * @returns {string} a sentence of advice which option to choose
   */
  export function chooseVehicle(option1, option2) {
    let vehicle
    if (option1[0] < option2[0]) {
      vehicle = option1
    } else {
      vehicle = option2
    }
  
    let result = vehicle + " is clearly the better choice."
    return result
  }
  
  /**
   * Calculates an estimate for the price of a used vehicle in the dealership
   * based on the original price and the age of the vehicle.
   *
   * @param {number} originalPrice
   * @param {number} age
   * @returns {number} expected resell price in the dealership
   */
  export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
      originalPrice = originalPrice * (1 - 0.20);
  } else if (age > 10) {
      originalPrice = originalPrice * (1 - 0.50); 
  } else if (age >= 3 && age <= 10) {
      originalPrice = originalPrice * (1 - 0.30);
  }
    
    return originalPrice
  }
  