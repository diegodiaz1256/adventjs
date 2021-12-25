function daysToXmas(date) {
    let navidad= new Date("Dec 25, 2021")
    let navmillis= navidad.getTime()
    let datemillis= date.getTime()
    let salida = navmillis - datemillis
    if(salida%86400000>0){
        salida+=86400000
    }else if(salida%86400000<0){
        salida-=86400000
    }
    if(salida>0){
        if(date.getFullYear()>navidad.getFullYear()){
            salida-=86400000*2
        }
    }else{
        if(date.getFullYear()>navidad.getFullYear()){
            salida+=86400000*2
        }
    }
    return Math.floor(salida/86400000)
}
module.exports=daysToXmas