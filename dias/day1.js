function contarOvejas(ovejas) {
    // aquí tu magia
    function colormatch(oveja){
        return oveja.color==='rojo'&&oveja.name.toUpperCase().includes("N")&& oveja.name.toUpperCase().includes("A")
    }
    //console.log(ovejas)
    return ovejas.filter(colormatch)
}
module.exports=contarOvejas