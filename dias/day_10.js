function getCoins(change) {
    // ¡No olvides compartir tu solución en redes!
    let salida = [0,0,0,0,0,0]
    /*coins[0] = 1 céntimo
    coins[1] = 2 céntimos
    coins[2] = 5 céntimos
    coins[3] = 10 céntimos
    coins[4] = 20 céntimos
    coins[5] = 50 céntimos*/
    while(change>0){
        if(change>=50){
            salida[5]+=1
            change-=50
        }else if(change>=20){
            salida[4]+=1
            change-=20
        }else if(change>=10){
            salida[3]+=1
            change-=10
        }else if(change>=5){
            salida[2]+=1
            change-=5
        }else if(change>=2){
            salida[1]+=1
            change-=2
        }else if(change>=1){
            salida[0]+=1
            change-=1
        }
    }
    return salida
}
module.exports=getCoins;