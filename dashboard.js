//setting up popup button and display popup button
const getPopup = `<span class="popup" onclick="openPopup()">Open Popup</span>`;
document.getElementById("openPopup").insertAdjacentHTML("beforeend", getPopup);

function openPopup() {
    window.open("popup.html", "", "width=800px, height=410px");
}

//getting newsletter email from local storage and display them
function sub(json_path) {
    let code = ``;
    for (let i = 0; i < json_path.length; i++) {
    code += `<li>${json_path[i]}</li>`;
    }
    return code;
}

if(localStorage.getItem("newsletterEmails")) {
    const newsletterEmails = JSON.parse(localStorage.getItem("newsletterEmails"));
    document.getElementById("emialLists").innerHTML = sub(newsletterEmails);
}