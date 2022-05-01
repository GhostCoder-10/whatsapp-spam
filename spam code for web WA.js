var message = prompt("Enter your message", "‎");
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
for (let index = 0; index < counter; index++) {
  textbox.innerHTML = message;
  textbox.dispatchEvent(event);
  document.getElementsByClassName("_4sWnG")[0].click();
}

// please run it on you on risk
// steps
// 1. open whatsapp web
// and open the contact to whom you want to spam
// 2. open console using command ctrl + shift + I 
// 3. paste this code and hit enter
// 4. write the message on pop up window
// 5. write the no. of time to spam it
// hit enter

// I tried this and I almost crash the whatsapp by spamming 1000 - 2000 
// messages at once so be carefull with putting the numbers
