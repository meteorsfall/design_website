const messages = document.getElementById("messages");
messages.style.display = "none";
const message = document.getElementById("message");
let copy1 = message.cloneNode(true);
let copy2 = message.cloneNode(true);
copy2.style.borderBottom = "0px";
messages.appendChild(copy1);
messages.appendChild(copy2);

const dropdown = document.getElementById("dropdown");
const dropdownMenu = document.getElementById("dropdown-menu");
dropdownMenu.style.display = "none";
dropdown.onclick = () => dropdownMenu.style.display = dropdownMenu.style.display == "none"? "flex" : "none";

function showMessages() {
    const messages = document.getElementById("messages");
    messages.style.display = messages.style.display === "none" ? "flex" : "none";
}

const dropdownMenus = document.getElementsByClassName("dropdown-menu");
for (let i = 0; i < dropdownMenus.length; i++) {
    let menu = dropdownMenus[i];
    menu.style.display = "none";
}

document.addEventListener("click", function(event) {
    for (let i = 0; i < dropdownMenus.length; i++){
        let menu = dropdownMenus[i];
        let menuParent = menu.parentNode;
        if (menuParent.contains(event.target) && menu.style.display != "flex"){
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    }
})

const dropdownLines = document.getElementsByClassName("dropdown-line");
for (let i = 0; i < dropdownLines.length; i++){
    let dropdownLine = dropdownLines[i];
    dropdownLine.onclick = () => dropdownLine.parentNode.parentNode.innerText = dropdownLine.innerText;
}
