const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
//////////////////////////////////
const avengers1 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers1[0] = 'IRONMAN'
console.log(avengers1)
///////////////////////////////////////////////////////
console.log(avengers.lenght)
//////////////////////////////////////////////////////////
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]) // Ultimo .lenght - 1 god
//////////////////////////////////////////////////////////
const rickAndMortyCharacter = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacter.pop()

console.log(rickAndMortyCharacter[0])
console.log(rickAndMortyCharacter[rickAndMortyCharacters.length - 1])
//////////////////////////////////////////////////////////////////
const rickAndMortyCharacte = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacte.splice(1, 1)

console.log(rickAndMortyCharacte)
