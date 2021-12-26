function groupBy(collection, it) {
    // ¡No olvides compartir tu solución en redes!
    let salida = {}
    if(typeof(it)=="function"){
        for(let i =0; i<collection.length;i++){
            if((salida[it(collection[i])])===undefined){
                (salida[it(collection[i])])=[]
            }
            (salida[it(collection[i])]).push(collection[i])
        }
    }else{
        for(let i =0; i<collection.length;i++){
            if((salida[collection[i][it]])===undefined){
                (salida[collection[i][it]])=[]
            }
            (salida[collection[i][it]]).push(collection[i])
        }
    }
    return salida
}
module.exports=groupBy