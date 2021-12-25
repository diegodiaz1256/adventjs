function contains(store, product) {
    // ¡Y no olvides compartir tu solución en redes
    salida = false
    for (const [key, value] of Object.entries(store)) {
        if(typeof(store[key])=="object"){
            salida = contains(store[key], product)
        }else if(value === product){
            return true
        }
    }
    return salida
}

module.exports=contains