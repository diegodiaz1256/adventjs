function checkSledJump(heights) {
    // ¡No olvides compartir tu solución en redes!
    let max = Math.max(...heights)
    max = heights.indexOf(max)
    if(max===heights.length-1||max===0){
        return false
    }
    for(let i=0; i<heights.length-1;i++){
        if(i<max){
            if(!(heights[i]<heights[i+1])){
                return false
            }
        }else{
            if(!(heights[i]>heights[i+1])){
                return false
            }
        }
    }
    return true
}
module.exports=checkSledJump