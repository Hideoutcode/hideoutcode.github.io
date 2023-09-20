var msgerForm = document.querySelector(".msger-inputarea");
var msgerInput = document.querySelector(".msger-input");
var msgerChat = document.querySelector(".msger-chat");

var Person_Name = "user";
var BOT_DIR = ["math" ,"code" ,"back"];
var BOT_MSGS = [

if (Person_Name === "user" && includes("hi", "hello", "how are you", "hola",  "hallo")) {
  BOT_MSGS = [
    "hi How are You?",
    "hello",
    "how can I help you?",
    "Hi",
    "Hi, today is a good day!",
  ];
}

if(Person_Name == "user" && includes("good", "fine", "a-okay")) {
  BOT_MSGS = [
    "How can I help You?",
    "Anything I can do for you today",
    "I am here to help!",
  ];

  if( Person_Name == "user" && includes("i need", "I need", "what is", "is this")) {
    BOT_MSGS = ["I can help you if you include key words on the subject such as math search test or joke, that is how my basic javascript ai works not that you probably care you just need a simple answer for right now I am completely irrelavant"];
      var array1 = Array["Math", "math","search", "test", "Joke"];
      if(( Person_Name = "user" && includes("math"))) {
        BOT_DIR = [ "math" ];
      }
   }
}
];





























// Icons made by me from unknown.org
var BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
var PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
var BOT_NAME = "HideoutBot";
var PERSON_NAME = "null";


msgerForm.addEventListener("submit", event => {
	event.preventDefault();

	var msgText = msgerInput.value;
	if (!msgText) return;

	appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
	msgerInput.value = "";

	botResponse();
});

function appendMessage(name, img, side, text) {
	//   Simple solution for small apps
	var msgHTML = `
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
	var r = random(0, BOT_MSGS.length - 1);
	var msgText = BOT_MSGS[r];
	var delay = msgText.split(" ").length * 100;

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
