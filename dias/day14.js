function missingReindeer(ids) {
    // ¡No olvides compartir tu solución en redes!
    for(let i = 0; i< ids.length;i++){
        if(!ids.includes(i)){
            return i
        }
    }
    return ids.length
}

module.exports=missingReindeer