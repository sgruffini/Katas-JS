const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25

/////////////////////////////////////////////////////////////////

let firstName = 'Jon'
let lastName = 'Snow'
let age = 24

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)

///////////////////////////////////////////////////////////////

const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }

const totalPrice = toy1.price + toy2.price
console.log(totalPrice)

///////////////////////////////////////////////////////////////////

// Paso 1: Declarar y asignar valor inicial a globalBasePrice
let globalBasePrice = 10000

// Paso 2: Declarar los objetos car1 y car2 con sus propiedades iniciales
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }

// Paso 3: Actualizar el valor de globalBasePrice
globalBasePrice = 25000

// Paso 4: Calcular y actualizar finalPrice de car1
car1.finalPrice = car1.basePrice + globalBasePrice

// Paso 5: Calcular y actualizar finalPrice de car2
car2.finalPrice = car2.basePrice + globalBasePrice

// Paso 6: Imprimir los objetos car1 y car2 para verificar los nuevos valores
console.log(car1) // { name: 'BMW m&m', basePrice: 50000, finalPrice: 75000 }
console.log(car2) // { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 95000 }
