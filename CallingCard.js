class CallingCard {
    constructor (centsPerMin) {
        this.centsPerMin = centsPerMin;
        this.money = 0;
        this.minutes = 0;
    }

  //add money to the card
  addDollars(amount) {
    var totalMoney = this.money += amount;
    this.money = totalMoney;
    console.log(totalMoney);
      //convert addDollars to added minutes
    this.minutes = Math.floor(totalMoney * 100 / this.centsPerMin)
}
  
//check how many mintues
getRemainingMinutes() {
    return this.minutes;
}

//decrease the number of minutes
useMinutes(used) {
    if (this.minutes - used < 0) {
       return this.minutes = 0;
    } else {
       return this.minutes -= used;   //call start and call end time?
    }
}
};

export default CallingCard;