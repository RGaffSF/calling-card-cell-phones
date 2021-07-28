
import CallingCard from "./CallingCard.js";

class CellPhone {
    constructor (callingCard) { //we want to track an instance of our calling card
        this.callingCard = callingCard;
        //this.phone = "";
        this.history = []; //our call history log
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
    this.activeCall = true;
    this.history.push(phoneNumber);
   }; 

// Let the minutes tick by.
 tick() {
     this.callingCard.minutes - 1;
     this.totalticks += 1;
 };
  
// end a call
 endCall() {
    //set active call to false
    this.activeCall = false;
    //push minutes to a history array to create a pseudo log
    this.history.push(this.totalticks);
    this.totalticks = 0;
   }; 
 }
 
// See the call history as a string.
    //return the start a call phone number and minutes used

    // getRemainingMinutes() {
    //     super.getRemainingMinutes
    // }

    export default CellPhone;