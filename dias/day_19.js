function learn(time, courses) {
    // ¡No olvides compartir tu solución en redes!
    let max=0;
    let salida=[]
    for(let i =0; i<courses.length-1;i++){
        for(let o=i+1; o<courses.length;o++){
            if(courses[i]+courses[o]===time){
                return [i, o]
            }else if(courses[i]+courses[o]>max&&courses[i]+courses[o]<time){
                max=courses[i]+courses[o]
                salida=[i,o]
            }
        }
    }
    return salida.length===2?salida:null
}
module.exports=learn;