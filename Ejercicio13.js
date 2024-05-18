const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  let wordCount = {}

  for (let i = 0; i < param.length; i++) {
    let word = param[i]
    if (wordCount[word]) {
      wordCount[word] += 1
    } else {
      wordCount[word] = 1
    }
  }

  return wordCount
}

console.log(repeatCounter(counterWords))
