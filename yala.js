//fetch JSON data
fetch("yala.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("yalaData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("yalaData"));


document.getElementById("int").innerHTML = data[1].int;

document.getElementById("box01Subhead01").innerHTML = data[2].box01.subhead01;
document.getElementById("box01para").innerHTML = data[2].box01.para;

document.getElementById("box02Subhead01").innerHTML = data[2].box02.subhead01;
document.getElementById("box02para").innerHTML = data[2].box02.para;

document.getElementById("box03Subhead01").innerHTML = data[2].box03.subhead01;
document.getElementById("box03para").innerHTML = data[2].box03.para;