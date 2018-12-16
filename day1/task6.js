var cat = {
    sound: 'meow',
    makeSound: function () {
        console.log(this.sound);
    },
}

var mruczek = Object.create(cat)
console.log(mruczek.sound)
console.log(cat.sound)
