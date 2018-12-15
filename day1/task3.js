//str.21-22
// var cat = {
//     name: 'Fluffy',
//     age: 1,
//     sound: 'Meeeeow!',
//     makeSound: function () {
//         console.log(this.sound);
//     },
//     speak: function () {
//         console.log('Sorry cats can’t speak');
//     }
// };

function catFactory(name) {
    return {
        name: name,
        speak: function () {
            console.log('Sorry cats can’t speak');
        }
    }
}

var cat1 = catFactory('ben')

console.log(cat1);