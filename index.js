//day1
const contarOvejas = require("./dias/day1")
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]
console.log("Dia 1: Contar ovejas\n\n")
console.log(contarOvejas(ovejas),"\n\n")



//day2
const listGifts = require("./dias/day2")
console.log("Dia 2: Lista de regalos\n\n")
const carta = "   bici coche    balón _playstation bici   coche peluche   bici ";
console.log(listGifts(carta),"\n\n")

//day 3
const isValid = require("./dias/day3")
console.log("Dia 3: Es valida mi carta\n\n")
const micarta = "() bici"
console.log(micarta,"\n", isValid(micarta))


//day 4
const createTree = require("./dias/day4")
console.log("Dia 4: Arbol de Navidad\n")
console.log(createTree(5),"\n\n")

//day 5
const daysToXmas = require("./dias/day5")
console.log("Dia 5: Contar dias\n")
let date = new Date("Jan 1, 2022 00:00:01")

//86400000
console.log(daysToXmas(date),"\n\n")

//day 6
const sumPairs = require("./dias/day6")
console.log("Dia 6: Examenes Finales\n")
// y 6,
let nums = [0, 2, 2, 3, -1, 1, 5]
console.log(sumPairs(nums, 6),"\n\n")

//day 7
const contains = require("./dias/day7")
console.log("Dia 7: Almacen contine\n")
const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}
console.log(contains(almacen, "camiseta"),"\n\n")
