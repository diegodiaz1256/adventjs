function fixFiles(files) {
    let repes = new Set()
    let mapa = {}
    for(let i = 0; i<files.length;i++){
        if(!repes.has((files[i]))){
            repes.add(files[i])
            mapa[files[i]]=1
        }else{
            let name = files[i]
            files[i]=files[i]+"("+mapa[files[i]]+")"
            mapa[name]+=1
        }
    }
    // ¡No olvides compartir tu solución en redes!
    return files
}
module.exports=fixFiles;