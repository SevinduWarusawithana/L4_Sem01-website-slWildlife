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