function listGifts(letter) {
    // ¡Tú puedes!
    let st = letter.split(" ")
    let no = new Set(st)
    var salida = new Map()
    no.forEach((i)=>{
        if(i.startsWith("_")||i===""){
            
        }else {
            let count = 0
            for(let o=0;o<st.length;o++){
                if(st[o]===i){
                    count++
                }
            }
            salida.set(i, count)
        }
    })
    return Object.fromEntries(salida)
}



module.exports=listGifts;
