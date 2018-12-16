//str.13

this.name = "Ala"
function hi() {
    console.log(this.name + " mówi hi!");
}
var person = { name: "Zenek", myHi: hi }
person.myHi() // Zenek mówi hi!
hi() // Ala mówi hi!


function hello() {
    console.log(this.name, 'mówi cześć');
}
var person = { name: "Zenek", myHello: hello }
person.myHello();
console.log(person.name, 'mówi cześć (by console.log)')



console.log('###')
function hair() {
    console.log(this.name, 'ma', this.length + ',', this.style, 'włosy koloru', this.color + '.');
}

var ala = { name: 'Alicja', color: 'blond', style: 'pofalowane', length: 'długie', myHair: hair }
ala.myHair()

var agata = { length: 'średnie', style: 'proste', name: 'Agata', color: 'brown', myHair: hair }
agata.myHair()

var zuza = { style: 'kręcone', length: 'długie', name: 'Zuza', color: 'red', myHair: hair }
zuza.myHair()

var mama = { style: 'proste', length: 'krótkie', myHair: hair, name: 'Monika', color: 'blond' }
mama.myHair()

var tata = { style: 'rzadziutkie', color: "noname ;)", myHair: hair, name: 'Grzegorz', length: 'króciutkie' }
tata.myHair();

var sheCat = { name: 'Kotka Śliwka', color: 'szylkret', style: 'aksamitne', myHair: hair, length: 'krótkie' }
sheCat.myHair()

var sheDog = { name: 'Suka Lolita', color: 'black', style: 'gęste', myHair: hair, length: 'długie' }
sheDog.myHair()

var dog = { name: 'Pies Duch', color: 'blond', style: 'gęste', myHair: hair, length: 'krótkie' }
dog.myHair()

console.log('###')
console.log(ala.name, 'ma', ala.length + ',', ala.style, 'włosy koloru', ala.color + '. by console.log()')
console.log(agata.name, 'ma', agata.length + ',', agata.style, 'włosy koloru', agata.color + '. by console.log()')
console.log(zuza.name, 'ma', zuza.length + ',', zuza.style, 'włosy koloru', zuza.color + '. by console.log()')
console.log(mama.name, 'ma', mama.length + ',', mama.style, 'włosy koloru', mama.color + '. by console.log()')
console.log(tata.name, 'ma', tata.length + ',', tata.style, 'włosy koloru', tata.color + '. by console.log()')
console.log(sheCat.name, 'ma', sheCat.length + ',', sheCat.style, 'włosy koloru', sheCat.color + '. by console.log()')
console.log(sheDog.name, 'ma', sheDog.length + ',', sheDog.style, 'włosy koloru', sheDog.color + '. by console.log()')
console.log(dog.name, 'ma', dog.length + ',', dog.style, 'włosy koloru', dog.color + '. by console.log()')
