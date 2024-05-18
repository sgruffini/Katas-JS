const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (const data in alien) {
  // console.log(alien[data]) MIO normal
  console.log(`${data}: ${alien[data]}`) // perfecto
}
