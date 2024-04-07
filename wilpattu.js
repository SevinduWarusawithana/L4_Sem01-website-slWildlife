//fetch JSON data
fetch("wilpattu.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("wilpattuData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("wilpattuData"));


document.getElementById("int").innerHTML = data[1].int;

document.getElementById("about").innerHTML = data[2].box01.subhead01;
document.getElementById("box01para").innerHTML = data[2].box01.para;

document.getElementById("wildlife").innerHTML = data[2].box02.subhead01;
document.getElementById("box02para").innerHTML = data[2].box02.para;

document.getElementById("activity").innerHTML = data[2].box03.subhead01;
document.getElementById("box03para").innerHTML = data[2].box03.para;

if (localStorage.getItem("currentUser")) {
    const getPopup = `<span class="popup" onclick="openPopup()">📝</span>`;
    document.getElementById("openPopup").insertAdjacentHTML("beforeend", getPopup);
}

function openPopup() {
    window.open("popup.html", "", "width=800px, height=410px");
}

document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById("newsletterForm");

    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;

        
        saveEmailToLocalStorage(email);

        
        document.getElementById("email").value = "";

        alert("Thank you for subscribing to our newsletter!");
    });
    function saveEmailToLocalStorage(email) {
        let newsletterEmails =
        JSON.parse(localStorage.getItem("newsletterEmails")) || [];
        newsletterEmails.push(email);
        localStorage.setItem(
        "newsletterEmails",
        JSON.stringify(newsletterEmails)
              );
    }
});
