function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!
    let letras = "abcdefghijklmnñopqrstuvwxyz"
    let regex = /\s/g;
    let lowercase = letter.toLowerCase().replace(regex, "");
    let acc = lowercase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    if(acc.length<26) return false
    for(let i = 0; i < letras.length; i++){
        if(acc.indexOf(letras[i]) === -1 && letras[i]!=="ñ"){
            return false
        }else if(lowercase.indexOf("ñ")===-1){
            return false;
        }
    }

    return true
}
module.exports=pangram