class CallingCard {
    constructor (centsPerMin) {
        this.centsPerMin = centsPerMin;
        this.totalMoney = 0;
        this.money = 0;
        this.minutes = 0;
    }

  //add money to the card
//   addDollars(amount) {
//     this.totalMoney = this.money += amount;
//     this.money = this.totalMoney;
//         //convert addDollars to added minutes
//     this.minutes = Math.floor(this.totalMoney * 100 / this.centsPerMin)

    addDollars(amount) {
        this.totalMoney = this.money += amount;
        this.money = amount;
            //convert addDollars to added minutes
        this.minutes = Math.floor(this.money * 100 / this.centsPerMin)
}
  
//check how many mintues
getRemainingMinutes() {
    return this.minutes;
}

//decrease the number of minutes
useMinutes(used) {
    if (this.minutes - used <= 0) {
        this.money = 0;
       return this.minutes = 0;
       } else {
       var totalusedminutes = this.minutes -=used;    
       this.money = ((this.totalMoney * 100) - (totalusedminutes * this.centsPerMin))/100;
       return totalusedminutes;
    } 
}
};

export default CallingCard;