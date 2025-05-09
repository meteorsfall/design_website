const messages = document.getElementById("messages");
messages.style.display = "none";
const message = document.getElementById("message");
let copy1 = message.cloneNode(true);
let copy2 = message.cloneNode(true);
copy2.style.borderBottom = "0px";
messages.appendChild(copy1);
messages.appendChild(copy2);

function showMessages() {
    const messages = document.getElementById("messages");
    messages.style.display = messages.style.display === "none" ? "flex" : "none";
}

