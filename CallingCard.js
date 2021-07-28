class CallingCard {
    constructor (centsPerMin, totalMoney) {
        this.centsPerMin = centsPerMin;
        this.totalMoney = 0;
        this.money = 0;
        this.minutes = 0;
    }

addDollars(amount) {
    this.money += amount;
    this.totalMoney += amount;
       //convert addDollars to added minutes
    this.minutes = Math.floor(this.money * 100 / this.centsPerMin)
}
  
//check how many mintues
getRemainingMinutes() {
    this.money = (this.minutes * this.centsPerMin)/100;
    return this.minutes;
}

//decrease the number of minutes
useMinutes(used) {
    if (this.minutes - used <= 0) {
        this.money = 0;
       return this.minutes = 0;
    } 
}
};

export default CallingCard;