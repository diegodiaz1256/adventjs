function countDecorations(bigTree) {
    // ¡No olvides compartir tu solución en redes!
    let sum=0
    sum+=bigTree.value
    if(bigTree.left!==null){
        sum+=countDecorations(bigTree.left)
    }
    if(bigTree.right!==null){
        sum+=countDecorations(bigTree.right)
    }
    return sum
}
module.exports=countDecorations