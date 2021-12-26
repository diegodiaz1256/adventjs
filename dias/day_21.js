function canCarry(capacity, trip) {
    // ¡No olvides compartir tu solución en redes!
    let llevando = 0
    for(let i=1; i<=10;i++){
        trip.forEach((parada)=>{
            if(parada[1]===i){
                llevando+=parada[0]
            }
            if(parada[2]===i){
                llevando-=parada[0]
            }
        })
        if(llevando>capacity) return false
    }
    return true
}
module.exports=canCarry