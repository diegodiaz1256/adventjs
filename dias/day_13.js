function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    let salida = []
    if(gifts.length>0){
        let i=0
        let tira="**"
        for(let o=0;o<gifts.length;o++){
            tira+="*"
        }
        salida[i]=tira
        i++
        gifts.forEach((cosa) => {
            tira="*"+cosa+"*"
            salida[i]=tira
            i++
        })
        tira="**"
        for(let o=0;o<gifts.length;o++){
            tira+="*"
        }
        salida[i]=tira

    }
    return salida
}
module.exports=wrapGifts;