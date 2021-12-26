function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    let mouse = []
    for(let i=0; i<game.length; i++){
        if(game[i].includes("m")){
            let linea=game[i]
            for(let o=0; o<linea.length;o++){
                if(linea[o]==="m"){
                    mouse=[i, o]
                }
            }
            break;
        }

    }
    if(direction==="up"){
        if(mouse[0]===0){
            return false
        }
        if(game[mouse[0]-1][mouse[1]]==="*") return true
    }
    if(direction==="down"){
        if(mouse[0]===game.length-1){
            return false
        }
        if(game[mouse[0]+1][mouse[1]]==="*") return true
    }
    if(direction==="left"){
        if(mouse[1]===0){
            return false
        }
        if(game[mouse[0]][mouse[1]-1]==="*") return true
    }
    if(direction==="right"){
        if(mouse[1]===game[mouse[0]].length-1){
            return false
        }
        if(game[mouse[0]][mouse[1]+1]==="*") return true
    }


    return false
}
module.exports=canMouseEat