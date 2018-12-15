const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = Object.assign({c: 4, d: 5}, obj1)
console.log(obj2) // { a: 1, b: 2, c: 4, d: 5}
//błąd - c: 3 !!!

const obj3 = Object.assign(obj1, {c: 4, d: 5})
console.log(obj3) // { a: 1, b: 2, c: 4, d: 5}