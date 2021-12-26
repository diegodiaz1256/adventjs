function getMinJump(obstacles) {
    // ¡No olvides compartir tu solución en redes!
    let solucion=-1
    let i=0
    while(solucion===-1){
        i++
        let sum=0
        while(true){
            sum+=i
            if(obstacles.includes(sum)){
                break
            }else if(sum>10){
                return i;
            }
        }
    }
    return solucion

}
module.exports=getMinJump