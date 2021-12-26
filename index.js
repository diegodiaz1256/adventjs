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
const micarta = "(()) bici"
console.log( isValid(micarta),"\n\n")


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

//day 10
const getCoins = require("./dias/day_10")
console.log("Dia 10: Maquina de cambios\n")
console.log(getCoins(51),"\n\n")

//day 11
const shouldBuyFidelity = require("./dias/day_11")
console.log("Dia 11: Tarjeta de Fidelidad\n")
console.log(shouldBuyFidelity(100),"\n\n")

//day 12
const getMinJump=require("./dias/day_12")
console.log("Dia 12: Menor salto\n")
const obstacles = [3, 7, 5]
console.log(getMinJump(obstacles),"\n\n")

//day 13
const wrapGifts = require("./dias/day_13")
console.log("Dia 13: Envolver regalos\n")
console.log(wrapGifts(["🏀"]),"\n\n")

//day 14
const missingReindeer = require("./dias/day_14")
console.log("Dia 14: Reno Perdido\n")
console.log(missingReindeer([3, 0, 1]),"\n\n")

//day 15
const checkSledJump = require("./dias/day_15")
console.log("Dia 15: Salto de Trineo\n")
console.log(checkSledJump([2, 4, 4, 6, 2]),"\n\n")

//day 16
const decodeNumber = require("./dias/day_16")
console.log("Dia 16: Decodificar Numero\n")
console.log(decodeNumber(";.W"),"\n\n")

//day 17
const countPackages = require("./dias/day_17")
console.log("Dia 17: Count Packages\n")
const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
]
console.log(countPackages(carriers, "dapelu"),"\n\n")

//day 18
const fixFiles = require("./dias/day_18")
console.log("Dia 18: Arreglar Archivos\n")
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files),"\n\n")

//day 19
const learn = require("./dias/day_19")
console.log("Dia 19: Horas para aprender\n")
console.log(learn(8, [8, 2, 1, 6]),"\n\n")

//day 20
const pangram = require("./dias/day_20")
console.log("Dia 20: Tiene todas las letras\n")
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'),"\n\n")

//day 21
const canCarry = require("./dias/day_21")
console.log("Dia 21: Rutas de regalos\n")
console.log(canCarry(4, [[1, 1, 5], [3, 2, 10]]),"\n\n")

//day 22

const countDecorations = require("./dias/day_22")
console.log("Dia 22: Recorrer arbol y contar\n")
const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
    },
    right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
    }
}
const bigTree = {
    value: 1,
    left: {
        value: 5,
        left: {
            value: 7,
            left: {
                value: 3,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        value: 6,
        left: {
            value: 5,
            left: null,
            right: null
        },
        right: {
            value: 1,
            left: null,
            right: null
        }
    }
}

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

console.log(countDecorations(bigTree),"\n\n")

//day 23
const canReconfigure = require("./dias/day_23")
console.log("Dia 23: Se puede reconfigurar?\n")
const from = 'AA'
const to   = 'MID'
console.log(canReconfigure(from, to),"\n\n")

//day 24
const checkIsSameTree = require("./dias/day_24")
console.log("Dia 24: Es el mismo Arbol?\n")
const tree2 = {
    value: 1,
    left: { value: 2, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 3, left: null, right: null }
}
console.log(checkIsSameTree(tree, tree2),"\n\n")

//day 25
const canMouseEat = require("./dias/day_25")
console.log("Dia 25: Puede Comer el Raton?\n")
const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*'],
    [' ', ' ', '*']
]
console.log(canMouseEat("up",room),"\n\n")
