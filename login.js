document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    

    fetch("login.json")
      .then((response) => response.json())
      .then((data) => {
        let user = data.users.find(
          (user) => user.username === username && user.password === password
        );

        // if (user) {

        //     document.getElementById("error-massage").textContent = "",
        //     alert("Login successfull Welcome, " + username);
        //     localStorage.setItem("currentUser", JSON.stringify(user));

        //     window.location.href = "dashboard.html";

        // } else {
        //     document.getElementById("error-message").textContent = "Invalid username or password";
        // }

        if (user) {
              localStorage.setItem("currentUser", JSON.stringify(user));
          if (user.role == "user") {
            window.location.href = "dashboard.html";
          } else {
            window.location.href = "dashboard.html";
          }
        } else {
          alert("Invalid Username or Password");
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
        }

      })
      .catch((error) => console.error("Error loading user data:", error));
  });
