function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else {
    return numberTwo
  }
}

////////////////////////////////////////

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(param) {
  let longestWord = ''

  for (let i = 0; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
      longestWord = param[i]
    }
  }

  return longestWord
}

console.log(findLongestWord(avengers))
