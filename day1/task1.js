function returnX() {
    return this.x;
}
var obj = { x: 42 }
var newReturnX = returnX;
console.log(newReturnX())
console.log(obj)

newReturnX() // execution in global scope, undefined is returned
var boundReturnX = newReturnX.bind(obj)
console.log(boundReturnX())

boundReturnX() // execution in obj object context , 42
console.log(boundReturnX())


