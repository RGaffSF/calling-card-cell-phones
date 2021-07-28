

import CallingCard from "./CallingCard.js";
import CellPhone from "./CellPhone.js";


let card = new CallingCard(10);
card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added

let phone = new CellPhone(card);
phone.isTalking();  // => returns false
console.log(phone.isTalking());

phone.call("555-1212");
phone.isTalking();  // => returns true
console.log(phone.isTalking());

phone.tick();       // simulate a minute going by
phone.tick();       // simulate another minute going by

//phone.endCall();
phone.isTalking();  // => returns false (because the call is over)
//phone.getHistory(); // => returns "555-1212 (2 minutes)"

card.getRemainingMinutes() // => return 8, because the call lasted 2 minutes;

console.log(phone);