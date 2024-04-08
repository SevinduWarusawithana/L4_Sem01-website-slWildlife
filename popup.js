//getting items from local storage
const popupSelectPage = document.getElementById("selectPage");
if (popupSelectPage)
  popupSelectPage.addEventListener("click", function (e) {

    const selectPage = document.querySelector(".selectPage").value;
    let textarea = document.querySelector(".jsonTextarea");
    

    if (selectPage == "home") {
      textarea.value = localStorage.getItem("homeData");
    }

    if (selectPage == "intro") {
      textarea.value = localStorage.getItem("introData");
    }

    if (selectPage == "department") {
      textarea.value = localStorage.getItem("departmentData");
    }

    if (selectPage == "leopard") {
      textarea.value = localStorage.getItem("leopardData");
    }

    if (selectPage == "animals") {
      textarea.value = localStorage.getItem("animalData");
    }

    if (selectPage == "wilpattu") {
      textarea.value = localStorage.getItem("wilpattuData");
    }

    if (selectPage == "yala") {
      textarea.value = localStorage.getItem("yalaData");
    } 
    
    else {
      console.log("something went wrong");
    }

  });

//setting changes to local storage
const popupSaveChanges = document.getElementById("saveChanges");

if (popupSaveChanges) {
  popupSaveChanges.addEventListener("click", function (e) {
    e.preventDefault();

    const selectPage = document.querySelector(".selectPage").value;
    const textareaValue = document.querySelector(".jsonTextarea").value;

    if (selectPage && textareaValue) {
      if (selectPage == "home") {
        localStorage.setItem("homeData", textareaValue);
      }

      if (selectPage == "intro") {
        localStorage.setItem("introData", textareaValue);
      }

      if (selectPage == "department") {
        localStorage.setItem("departmentData", textareaValue);
      }

      if (selectPage == "leopard") {
        localStorage.setItem("leopardData", textareaValue);
      }

      if (selectPage == "animals") {
        localStorage.setItem("animalData", textareaValue);
      }

      if (selectPage == "wilpattu") {
        localStorage.setItem("wilpattuData", textareaValue);
      }

      if (selectPage == "yala") {
        localStorage.setItem("yalaData", textareaValue);
      }

      
      alert("Data saved to local storage!");
    } 
    
    else {
      console.log("Error: Something went wrong. Make sure both page and textarea have values.");
    }

  });
} 