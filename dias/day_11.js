function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    let fidelity = 250;
    for(let i = 0; i<times;i++){
        suma = 12*Math.pow(0.75, i+1)
        fidelity+=suma
    }
    return fidelity<times*12
}
module.exports=shouldBuyFidelity