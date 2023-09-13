 const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");


var Person_Name = "user";
const BOT_DIR = array["math", "code", "back", "start",];


if(var Person_Name = "user";includes("hi, hello, how are you, hola,  hallo"; const BOT_MSGS = [
  "hi How are You?",
  "hello",
  "how can I help you?",
  "Hi",
  "Hi, today is a good day!",
]));

If(var person_name = "user";includes("good", "fine", "a-okay"; const BOT_MSGS = [
  "How can I help You?",
  "Anything I can do for you today", 
  "I am here to help!",
  ]));

if(var Person_name = "user";includes("i need", "I need", "what is", "is this",; const BOT_MSGS = [ 
 "I can help you if you include key words on the subject such as math search test or joke, that is how my basic javascript ai works not that you probably care you just need a simple answer for right now I am completely irrelavant",]));
 

 const array1 = Array["Math", "math","search", "test", "Joke"];

If(var Person_name = "user";includes("math"; const BOT_DIR = [

 "math",
  

 
]));

If(const BOT_DIR = "math"; javascript: function myFunction() {
  var x,y,z,oper;
  x=prompt("Type first number");
  y=prompt("Type second number");
  oper=prompt("Type an operator");
  
  if(oper=="+"){
    z=Number(x)+Number(y);
  }
  else if(oper=!null){
    z="Error"
  }
  else if(x=!null){
    z="Error"
  }
  else if(y=!null){
    z="Error"
  }
  else if(oper=="/"){
    z=Number(x)/Number(y);
  }
  else if(oper=="*"){
    z=Number(x)*Number(y);
  }
  else if(oper=="-"){
    z=Number(x)-Number(y);
  }
  
  return z;
    }
document.getElementById("demo").innerHTML =myFunction());











  
  
  
    









// Icons made by me from unknown.org
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "HideoutBot";
const PERSON_NAME = "null";


 msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

  
  
  
