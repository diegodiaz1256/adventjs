function sumPairs(numbers, result) {
    for(let i=0; i<numbers.length; i++){
        for(let o =i+1; o<numbers.length; o++){
            if(numbers[i]+numbers[o]===result){
                return[numbers[i], numbers[o]]
            }
        }
    }
    return null
}
module.exports=sumPairs;