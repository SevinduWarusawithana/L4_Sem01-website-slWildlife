//fetch JSON data
fetch("leopard.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("leopardData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("leopardData"));


document.getElementById("int").innerHTML = data[0].int;

document.getElementById("where_leo").innerHTML = data[1].topic01;

document.getElementById("box01Subhead01").innerHTML = data[2].box01.subhead01;
document.getElementById("box01para").innerHTML = data[2].box01.para;
document.getElementById("box01link").innerHTML = data[2].box01.link;

document.getElementById("box02Subhead01").innerHTML = data[2].box02.subhead01;
document.getElementById("box02para").innerHTML = data[2].box02.para;
document.getElementById("box02link").innerHTML = data[2].box02.link;

document.getElementById("box03Subhead01").innerHTML = data[2].box03.subhead01;
document.getElementById("box03para").innerHTML = data[2].box03.para;

document.getElementById("box04para").innerHTML = data[3].para01;

document.getElementById("subTopic02").innerHTML = data[4].topic02;

document.getElementById("box04Subhead01").innerHTML = data[5].box01.subhead01;
document.getElementById("box04para01").innerHTML = data[5].box01.para01;
document.getElementById("box04para02").innerHTML = data[5].box01.para02;
document.getElementById("box04para03").innerHTML = data[5].box01.para03;

document.getElementById("box05Subhead01").innerHTML = data[5].box02.subhead01;
document.getElementById("box05para01").innerHTML = data[5].box02.para01;
document.getElementById("box05para02").innerHTML = data[5].box02.para02;
document.getElementById("box05para03").innerHTML = data[5].box02.para03;

if (localStorage.getItem("currentUser")) {
    document.querySelector(".headingPopup").classList.remove("display-none")
    const getPopup = `<span class="popup" onclick="openPopup()">Open Popup</span>`;
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
