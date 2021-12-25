function maxProfit(prices) {
    let profit = -1
    for(let i = 0; i<prices.length-1;i++){
        for(let o=i+1;o<prices.length;o++){
            if(prices[o]-prices[i]>profit){
                profit=prices[o]-prices[i];
            }
        }
    }
    return profit>0?profit:-1
}
module.exports=maxProfit;