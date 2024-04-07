const get_data_button = document.getElementById("selectPage");
if (get_data_button)
  get_data_button.addEventListener("click", function (e) {

    const selectPage = document.querySelector(".select_page").value;
    let textarea = document.querySelector(".json_textarea");
    

    if (selectPage == "home") {
      textarea.value = localStorage.getItem("HomeData");
    }
    if (selectPage == "introduction") {
      textarea.value = localStorage.getItem("introData");
    }

    if (selectPage == "department") {
      textarea.value = localStorage.getItem("departmentData");
    }

    if (selectPage == "leopards") {
      textarea.value = localStorage.getItem("leopardsData");
    }

    if (selectPage == "animals") {
      textarea.value = localStorage.getItem("animalData");
    }

    if (selectPage == "wilpattu") {
      textarea.value = localStorage.getItem("wilpattuData");
    }

    if (selectPage == "yala") {
      textarea.value = localStorage.getItem("yalaData");
    } else {
      console.log("something went wrong");
    }
  });

const editPageButton = document.getElementById("saveChanges");

if (editPageButton) {
  editPageButton.addEventListener("click", function (e) {
    e.preventDefault();

    const selectPage = document.querySelector(".selectPage").value;
    const textareaValue = document.querySelector(".json_textarea").value;

    if (selectPage && textareaValue) {
      if (selectPage == "home") {
        localStorage.setItem("Home_page", textareaValue);
      }

      if (selectPage == "introduction") {
        localStorage.setItem("Introduction", textareaValue);
      }

      if (selectPage == "department") {
        localStorage.setItem("Department", textareaValue);
      }

      if (selectPage == "leopards") {
        localStorage.setItem("Leopards", textareaValue);
      }

      if (selectPage == "animals") {
        localStorage.setItem("Animal_data", textareaValue);
      }

      if (selectPage == "wilpattu") {
        localStorage.setItem("Willpattu", textareaValue);
      }

      if (selectPage == "yala") {
        localStorage.setItem("Yala", textareaValue);
      }

      // localStorage.setItem(selectPage, textareaValue);
      alert("Data saved to local storage!");
    } else {
      console.log(
        "Error: Something went wrong. Make sure both page and textarea have values."
      );
    }
  });
} 