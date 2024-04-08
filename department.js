//fetch JSON data
fetch("department.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("departmentData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("departmentData"));


document.getElementById("int").innerHTML = data[0].int;

document.getElementById("para01").innerHTML = data[1].para01;
document.getElementById("para02").innerHTML = data[1].para02;
document.getElementById("para03").innerHTML = data[1].para03;

// if (localStorage.getItem("currentUser")) {
//     document.querySelector(".headingPopup").classList.remove("display-none")
//     const getPopup = `<span class="popup" onclick="openPopup()">Open Popup</span>`;
//     document.getElementById("openPopup").insertAdjacentHTML("beforeend", getPopup);
// }

// function openPopup() {
//     window.open("popup.html", "", "width=800px, height=410px");
// }

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
