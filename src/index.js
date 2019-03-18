// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var moneyExchange = {};
    var countH = 0;
    var countQ = 0;
    var countD = 0;
    var countN = 0;
    var countP = 0;
    while(currency!= 0){
        if(currency > 10000) {
            currency = 0;
            moneyExchange.error = "You are rich, my friend! We don't have so much coins for exchange";
        }
        else if (currency >= 50){
            currency -= 50;
            countH++;
            moneyExchange.H = countH;
        }
        else if (currency >= 25){
            currency -= 25;
            countQ++;
            moneyExchange.Q = countQ;
        }
        else if (currency >= 10){
            currency -= 10;
            countD++;
            moneyExchange.D = countD;
        }
        else if (currency >= 5){
            currency -= 5;
            countN++;
            moneyExchange.N = countN;
        }
        else if(currency >=1){
            currency -= 1;
            countP++;
            moneyExchange.P = countP;
        }
        else{
            currency = 0;
            moneyExchange = {};
        }
    }
    return moneyExchange;
}
