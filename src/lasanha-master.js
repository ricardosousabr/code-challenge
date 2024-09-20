/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
    let preparationStatus
    if (timer == 0) {
      preparationStatus = 'Lasagna is done.'
    } else if (timer > 0) {
      preparationStatus = 'Not done, please wait.'
    } else {
      preparationStatus = 'You forgot to set the timer.'
    }
    return preparationStatus
  }
  
  export function preparationTime(layers , timer) {
    let timePreparation = 0
    let i = 0
    for(i; i < layers.length; i++) {
      if (timer) {
        timePreparation += timer
      } else {
        timePreparation += 2
      }
    }
    return timePreparation
  }
  
  export function quantities(layers) {
    let i = 0
    let ingredients = {
      noodles:0,
      sauce:0,
    }
    for (i; i < layers.length; i++) {
      if (layers[i] == 'noodles') {
        ingredients.noodles += 50
      } else if (layers[i] == 'sauce') {
        ingredients.sauce += 0.2
      }
    }
    return ingredients
  }
  
  export function addSecretIngredient(friendsList, myList) {
    myList.splice(myList.length, 0, friendsList[friendsList.length - 1])
  }
  
  export function scaleRecipe(recipe, portions) {
    let newRecipe = {}
    for (let key in recipe) {
      newRecipe[key] = (recipe[key] / 2) * portions
    }
    return newRecipe
  }