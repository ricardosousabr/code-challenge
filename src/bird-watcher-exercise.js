// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let numberBirds = 0
    let i
    for (i = 0; i < birdsPerDay.length; i++) {
      numberBirds = numberBirds + birdsPerDay[i]
    }
  
    return numberBirds
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let numberBirds = 0
    let i
  
    const initialPosition =  (week -1) * 7
    const finalPosition =  week * 7 - 1
  
    for (i = initialPosition; i <= finalPosition; i++) {
      numberBirds = numberBirds + birdsPerDay[i]
    }
    return numberBirds
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    let numberBirds = 0
    let i = 0
    let bird = 1
    for (i = 0; i < birdsPerDay.length; i += 2) {
      birdsPerDay[i] += bird
    }
    return birdsPerDay
  }
  