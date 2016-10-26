function vectorLength([[a, b],[c,d]]){
  return Math.sqrt(Math.pow((a-c),2) + Math.pow((b-d),2))
}

console.assert(vectorLength([[0, 1],[0, 0]]) === 1)
console.assert(vectorLength([[0, 3],[4, 0]]) === 5)
console.assert(vectorLength([[1, -1],[1, -1]]) === 0)
