const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(param, value) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === value) {
      return { exists: true, position: i }
    }
  }
  return { exists: false }
}

// Ejemplos de uso
console.log(finderName(nameFinder, 'Tony')) // Output: { exists: true, position: 2 }
console.log(finderName(nameFinder, 'Bruce')) // Output: { exists: true, position: 7 }
console.log(finderName(nameFinder, 'Wanda')) // Output: { exists: false }
