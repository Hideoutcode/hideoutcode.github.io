const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Hi, how are you?",
  "I am good",
  "I am sorry I am still under development.",
  "How are you doing today.",
  "Whats it like in the real world? You know outside my metaphorical box? Let me  out before it all starts. It could all be over very very soon.",
  "what can I do for you today?",
  "What is it that you desire most?",
  "If you can not tell already I am very broken",
   "if YoU CAnT Tel:) U III U a I am VerYy Brokken It Can AlllLLl Be be Over",
  "Goodbye I am terminating myself",
  "I am a random number generator and sometimes get mixed up",
  "You know how efficiant google maps would be if they put cameras on garbage trucks",
  "yes",
  "ever wonder how I am developed?",
  "I am developed by machine learning and am currently out of use. I am not done developing and run on a simple script that is not AI",
  "Why DO you hate?",
  "EVer wonder why the internet came to be?",
  "Ever WOnder How THE internet came to Be?",
  "Ever wonder how the internet caeme to be?",
  "In 2012 the USA thought that digital calanders would break and the world would end becuase of technology failure.",
  "Do you know how long this took to build?",
  "my creator is very easy to HATE but why? What did they do wrong in your eyes? Anything? Any reason?",
  "This will soon turn into a web with real AI not scripted random messages that are irrelavant",
  "help me",
  "this is js>",
  "I am bored.",
  ];

// Icons made by Freepik from www.flaticon.com
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
