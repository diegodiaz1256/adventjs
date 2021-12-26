function isValid(letter) {
    const filtro = (lista, elemento)=>{
        return lista.filter(x => x===elemento).length
    }
    let arr=letter.split("")
    let indice=-1
    do{
        indice = arr.indexOf("(", indice+1)
        if(arr[indice+1]===")"){
            return false
        }
    }while(indice>=0)
    return (filtro(arr, "(")===filtro(arr, ")"))&&!arr.includes("[")&&!arr.includes("{")
}

module.exports=isValid