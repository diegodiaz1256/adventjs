function createXmasTree(height) {
    let salida = ""
    modh=height-1
    for(u=0;u<height;u++){
        for(i=-modh;i<=modh;i++){
            if(i===u*-1||i===u||(i<u&&i>-u)){
                salida+="*"
            }else{
                salida+="_"
            }
        }
        salida+="\n"
    }
    for(o=0;o<2;o++){
        for (i = -modh; i <= modh; i++) {
            if (i === 0) {
                salida += "#"
            } else {
                salida += "_"
            }
        }
        if(o===0){
            salida += "\n"
        }
    }
    return salida
}


module.exports = createXmasTree