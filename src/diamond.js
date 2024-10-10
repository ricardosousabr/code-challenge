let diamonds = "<><<><>>><<><<<>>>>><<<>>>>>"

function caunterDiamonds() {
  let i = 0
  let diamondsOpen = 0
  let diamondsClosed = 0
  for (i; i < diamonds.length; i++) {
    if (diamonds[i] == "<") {
      diamondsOpen++
    } else if (diamonds[i] == ">" && diamondsOpen > 0) {
      diamondsClosed++
      diamondsOpen--
    }
  }
  console.log(diamondsClosed)
}

caunterDiamonds()