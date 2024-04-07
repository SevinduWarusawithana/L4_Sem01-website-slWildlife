// const getPopup = `<alt="popup" onclick="openPopup()">`;
// document.getElementById("openPopup").insertAdjacentHTML("beforeend", getPopup);

// function openPopup() {
//     window.open("popup.html", "", "width=800px, height=410px");
// }

const getPopup = `<span class="popup" onclick="openPopup()">Open Popup</span>`;
document.getElementById("openPopup").insertAdjacentHTML("beforeend", getPopup);

function openPopup() {
    window.open("popup.html", "", "width=800px, height=410px");
}


// let username = document.getElementById('openPopup').textContent = `${username}`;
