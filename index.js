const messages = document.getElementById("messages")
messages.style.display = "none";

function showMessages() {
    const messages = document.getElementById("messages");
    messages.style.display = messages.style.display === "none" ? "flex" : "none";
}

