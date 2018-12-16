function Cat(name, age) {
    this.name = name
    this.age = age
    this.sound = 'Meeeeow!'
}
Cat.prototype.makeSound = function () {
    console.log(this.sound);
}
Cat.prototype.speak = function () {
    console.log('Sorry cats can’t speak');
}

var myBeniek = new Cat('beniek', 10)
var myMerlin = new Cat('merlin', 8)
console.log(myBeniek)
console.log(myMerlin)
