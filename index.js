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
    dropdownLine.onclick = () => dropdownLine.parentNode.parentNode.querySelector("span").innerHTML = dropdownLine.innerText;
}

const turnDarkElems = document.getElementsByClassName("turn-dark");
for (let i = 0; i < turnDarkElems.length; i++){
    let turnDarkElem = turnDarkElems[i];
    turnDarkElem.addEventListener("click", function() {
        if (turnDarkElem.style.backgroundColor == "rgb(157, 205, 205)"){
            turnDarkElem.style.backgroundColor = "rgb(44, 61, 81)";
            turnDarkElem.style.color = "rgb(157, 205, 205)";
        } else {
            turnDarkElem.style.backgroundColor = "rgb(157, 205, 205)";
            turnDarkElem.style.color = "black";
        }
    });
}

const watchElems = document.getElementsByClassName("watch");
for (let i = 0; i < watchElems.length; i++){
    let watchElem = watchElems[i];
    watchElem.addEventListener("click", function() {
        if (watchElem.textContent == "Watch"){
            watchElem.textContent = "Watching";
        } else {
            watchElem.textContent = "Watch";
        }
    });
}

const icon2Elems = document.getElementsByClassName("icon2");
for (let i = 0; i < icon2Elems.length; i++){
    let icon2Elem = icon2Elems[i];
    icon2Elem.addEventListener("click", function() {
        this.classList.toggle("active");
    });
}
