function decodeNumber(symbols) {
    const numberValue = (char)=>{
        if(char==="."){
            return 1
        }
        if(char===","){
            return 5
        }
        if(char===":"){
            return 10
        }
        if(char===";"){
            return 50
        }
        if(char==="!"){
            return 100
        }else{
            return -1
        }
    }
    symbols = Array.from(symbols)
    symbols.reverse()
    let anterior = 0
    let act = 0
    let salida =0
    for(let i=0; i<symbols.length; i++){
        act = numberValue(symbols[i])
        if(act===-1){
            return NaN
        }
        if((act>=anterior)){
           salida+=act
        }else{
            salida-=act
        }
        anterior=act
    }
    // ¡No olvides compartir tu solución en redes!
    return salida
}
module.exports=decodeNumber