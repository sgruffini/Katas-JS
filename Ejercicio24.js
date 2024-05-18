const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (let i = 0; i < products.length; i++) {
  if (products[i].sellCount >= 20) {
    goodProducts.push(products[i])
  } else products[i].sellCount < 20
  {
    badProducts.push(products[i])
  }
}

console.log('Los mejores productos son:', goodProducts)
console.log('Los peores productos son:', badProducts)
