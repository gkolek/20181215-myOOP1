//str.35
var Cat = (function () {
    function Cat(name) {
        this.sound = "Meow";
    }
    Cat.prototype.makeSound = function makeSound() {
        console.log(this.sound);
    };
    return Cat;
})();
var myMyszka = new Cat()
console.log(Cat)
console.log(myMyszka)