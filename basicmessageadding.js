function addMessage(user, message_content){
  var shown_message = document.createElement("div");
  var message_user = document.createElement("div");
  var message_paragraph = document.createElement("div");

  var message_user_node = document.createTextNode(user)
  var message_para_node = document.createTextNode(message_content)

  message_user.appendChild(message_user_node)
  message_paragraph.appendChild(message_para_node)

  shown_message.appendChild(message_user)
  shown_message.appendChild(message_paragraph)

  message_user.className = "user"
  shown_message.className = "message"
  message_paragraph.className = "paragraph"
  
  var chatwrapper = document.getElementById("chatwrapper");
  chatwrapper.appendChild(shown_message)
}
var cocomelon2 = "i am cocomelon also"
addMessage("Zachary", "zach's message")
addMessage("Brian", "brian's message")
addMessage("Brian", "brian's message2", "message3")
addMessage("Brian", "brian's message2", "message3")
