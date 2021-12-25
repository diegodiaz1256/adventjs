function isValid(letter) {
    const filtro = (lista, elemento)=>{
        return lista.filter(x => x===elemento).length
    }
    let arr=letter.split("")
    let indice=0
    do{
        indice = arr.indexOf("(", indice)
        if(arr[indice+1]===")"){
            return false
        }
    }while(indice>=0)
    return filtro(arr, "(")===filtro(arr, ")")&&
        filtro(arr, "[")+filtro(arr, "]")+filtro(arr, "{")+filtro(arr, "]")===0
}

module.exports=isValid