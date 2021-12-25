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
console.log("Dia 7: Almacen contiene\n")
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
const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}
console.log(contains(otroAlmacen, "gameboy"),"\n\n")

//day 8
const maxProfit = require("./dias/day8")
console.log("Dia 8: Profit Maximo\n")
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]
const pricesDoge = [18, 15, 12, 11, 9, 7]
const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda),"\n\n")

//day 9
const groupBy = require("./dias/day9")
console.log("Dia 9: Agrupar\n")
groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

console.log(groupBy([6.1, 4.2, 6.3], Math.floor),"\n\n")

/*//day 10
const createTree = require("./dias/day4")
console.log("Dia 4: Arbol de Navidad\n")
console.log(createTree(5),"\n\n")*/
