console.log('hello world');
//str.13

this.name = "Ala"
function hello() {
console.log(this.name + " mówi hi!");
}
var person = {name: "Zenek", say: hello}
person.say() // Zenek mówi hi!
hello() // Ala mówi hi!
