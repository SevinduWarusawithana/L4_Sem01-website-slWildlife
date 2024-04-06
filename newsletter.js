document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    
    // let username = document.getElementById("username").value;
    // let password = document.getElementById("password").value;
    
    fetch("login.json")
      .then((response) => response.json())
      .then((data) => {
        let user = data.users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          alert("Welcome, " + username);
          
          localStorage.setItem("currentUser", JSON.stringify(user));
          if (user.role == "user") {
            window.location.href = "index.html";
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