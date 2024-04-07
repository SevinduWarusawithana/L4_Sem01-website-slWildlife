//fetch JSON data
fetch("animals.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("animalData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("animalData"));


document.getElementById("int").innerHTML = data[0].int;

document.getElementById("box01Subhead01").innerHTML = data[1].box01.subhead01;
document.getElementById("box01para").innerHTML = data[1].box01.para01;

document.getElementById("box02Subhead01").innerHTML = data[1].box02.subhead01;
document.getElementById("box02para").innerHTML = data[1].box02.para01;

document.getElementById("box03Subhead01").innerHTML = data[1].box03.subhead01;
document.getElementById("box03para").innerHTML = data[1].box03.para01;

document.getElementById("box04Subhead01").innerHTML = data[1].box04.subhead01;
document.getElementById("box04para").innerHTML = data[1].box04.para01;

document.getElementById("box05Subhead01").innerHTML = data[1].box05.subhead01;
document.getElementById("box05para").innerHTML = data[1].box05.para01;

document.getElementById("box06Subhead01").innerHTML = data[1].box06.subhead01;
document.getElementById("box06para").innerHTML = data[1].box06.para01;

document.getElementById("box07Subhead01").innerHTML = data[1].box07.subhead01;
document.getElementById("box07para").innerHTML = data[1].box07.para01;

document.getElementById("box08Subhead01").innerHTML = data[1].box08.subhead01;
document.getElementById("box08para").innerHTML = data[1].box08.para01;

document.getElementById("box09Subhead01").innerHTML = data[1].box09.subhead01;
document.getElementById("box09para").innerHTML = data[1].box09.para01;

document.getElementById("box10Subhead01").innerHTML = data[1].box10.subhead01;
document.getElementById("box10para").innerHTML = data[1].box10.para01;

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
