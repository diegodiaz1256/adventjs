function canReconfigure(from, to) {
    // ¡No olvides compartir tu solución en redes!
    if(from.length!==to.length){
        return false
    }
    let used = {}
    for(let o=0; o<from.length;o++){
        if(Object.keys(used).includes(from[o])){
            if(!Object.values(used).includes(to[o])){
                return false
            }
        }else if(Object.values(used).includes(to[o])) {
            if(!Object.keys(used).includes(from[o])){
                return false
            }
        }else{
            used[from[o]]=to[o]
        }
    }

    return true
}
module.exports=canReconfigure