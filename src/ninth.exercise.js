// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    let timer
    switch (name) {
        case 'Pure Strawberry Joy':
        timer = 0.5
        break;
        case 'Energizer':
        timer = 1.5
        break;      
        case 'Green Garden':
        timer = 1.5
        break;      
        case 'Tropical Island':
        timer = 3
        break;      
        case 'All or Nothing':
        timer = 5
        break;
      default: timer = 2.5
        
    }
  
    return timer
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  
  export function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let slices = 0;
  let limesCut = 0;
  
  while (slices < wedgesNeeded && i < limes.length) {
    let additionalSlices;
    
    switch (limes[i]) {
      case 'small':
        additionalSlices = 6;
        break;
      case 'medium':
        additionalSlices = 8;
        break;
      case 'large':
        additionalSlices = 10;
        break;
    }
    
    slices += additionalSlices;
    limesCut++;
    i++;
  }
  
  // Ajuste para não cortar mais do que o necessário
  if (slices > wedgesNeeded) {
    slices = wedgesNeeded;
  }
  
  return limesCut
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    let i = 0
    while (timeLeft > 0 && i < orders.length) {
      switch (orders[i]){
        case 'Pure Strawberry Joy':
        timeLeft = timeLeft - 0.5
        break;
        case 'Energizer':
        timeLeft = timeLeft - 1.5
        break;      
        case 'Green Garden':
        timeLeft = timeLeft - 1.5
        break;      
        case 'Tropical Island':
        timeLeft = timeLeft - 3
        break;      
        case 'All or Nothing':
        timeLeft = timeLeft - 5
        break;
        default: timeLeft = timeLeft - 2.5
      }
      orders.splice(i, 1)
    }
    return orders
  }
  