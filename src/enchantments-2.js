// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let value = 0
  stack.forEach((element) => {
    if (element === card) {
      value++
    }
  })

  return value
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let card = 0
    for (stack of stack) {
      if (type && stack % 2 === 0) {
        card++
      } else if (!type && stack % 2 != 0) {
        card++
      }
    }
  return card
}