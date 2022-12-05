function wrapping(gifts) {
    gifts = gifts.map((gift) => {
        salida = "*"
        for (i in gift) {
            salida += "*"
        }
        salida += "*\n"
        salida += "*" + gift + "*\n*"
        for (i in gift) {
            salida += "*"
        }
        salida += "*"
        return salida
    })
    //console.log(gifts)
    return gifts
}
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)