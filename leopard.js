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