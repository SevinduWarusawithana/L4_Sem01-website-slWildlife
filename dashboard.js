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


// if (currentUser == "user") {
    // document.getElementById("newsletterEmails").style.display = "none";
//   } else {
function sub(json_path) {
    let code = ``;
    for (let i = 0; i < json_path.length; i++) {
    code += `<li>${json_path[i]}</li>`;
    }
    return code;
}
    // Assuming subscriptions is retrieved from local storage and is an array of email addresses
if(localStorage.getItem("newsletterEmails")) {
    const newsletterEmails = JSON.parse(localStorage.getItem("newsletterEmails"));
    document.getElementById("emialLists").innerHTML = sub(newsletterEmails);
}

    // Check if subscriptions is not null and is an array
    // if (newsletterEmails && Array.isArray(newsletterEmails)) {
    //   document.getElementById("emialLists").innerHTML =
    //     sub(newsletterEmails);
    // } else {
    //   // Handle the case where newsletterEmails is not found or not an array
    //   console.error("newsletterEmails data is missing or invalid.");
    // }
//   }