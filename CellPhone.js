
import CallingCard from "./CallingCard.js";

class CellPhone {
    constructor (callingCard) { //we want to track an instance of our calling card
        this.callingCard = callingCard;
        //this.phone = "";
        this.history = ""; //our call history log
        this.activeCall = false;
        this.totalticks = 0;
    }

// Check if there is an active call isTalking. booleen 
isTalking() {
if (this.activeCall === true) {
    return true;
  } return false;
};

// Start a call
   call(phoneNumber) {  //phone number to call
    //set active call to true
    if (this.activeCall === true) {
        return "Call needs to be ended";
    } else {
      this.activeCall = true;
      if (this.history.length > 0) {
          this.history += ", "
      }
    this.history += phoneNumber;
    };
   }; 

// Let the minutes tick by.
 tick() {
     this.callingCard.minutes -= 1;
     this.totalticks += 1;
     if (this.callingCard.minutes === 0 ) {
        this.endCall()
     }
 };
  
// end a call
 endCall() {
    //set active call to false
    this.activeCall = false;
    //push minutes to a history array to create a pseudo log
    if (this.callingCard.minutes === 0){
        if (this.totalticks === 1){
            this.history += " (cut of at " + this.totalticks + " minute)";    
        } else {
            this.history += " (cut of at " + this.totalticks + " minutes)";
        }
    } else {
        if (this.totalticks === 1){
            this.history += " (" + this.totalticks + " minute)";
        } else {
            this.history += " (" + this.totalticks + " minutes)";
        }
    }
    this.totalticks = 0;
   }; 

// See the call history as a string.
getHistory() {
    return this.history;
};


}
 

    export default CellPhone;