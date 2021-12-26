function countPackages(carriers, carrierID) {
    // ¡No olvides compartir tu solución en redes!
    let selected = -1
    for(let i =0; i<carriers.length;i++){
        if(carriers[i][0]===carrierID){
            selected=i;
            break
        }
    }
    let salida = carriers[selected][1]
    for(let i =0; i<(carriers[selected][2]).length;i++){
        salida+=countPackages(carriers, carriers[selected][2][i])
    }
    return salida
}
module.exports = countPackages