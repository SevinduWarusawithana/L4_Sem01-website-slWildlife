//fetch JSON data
fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("homeData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("homeData"));


document.getElementById("int").innerHTML = data[0].int;
document.getElementById("intro").innerHTML = data[0].intro;

document.getElementById("box01Subhead01").innerHTML = data[1].box01.subhead01;
document.getElementById("box01Para01").innerHTML = data[1].box01.para01;
document.getElementById("box01Para02").innerHTML = data[1].box01.para02;

document.getElementById("box02Subhead01").innerHTML = data[2].box02.subhead01;
document.getElementById("box02Para01").innerHTML = data[2].box02.para01;
document.getElementById("box02Para02").innerHTML = data[2].box02.para02;

document.getElementById("box03Subhead01").innerHTML = data[3].box03.subhead01;
document.getElementById("box03Para01").innerHTML = data[3].box03.para01;
document.getElementById("box03Para02").innerHTML = data[3].box03.para02;

document.getElementById("listTopic").innerHTML = data[4].list.listhead01;

document.getElementById("listSubTopic01").innerHTML = data[4].list.listSubTopic01;
document.getElementById("listContent01").innerHTML = data[4].list.thing1;
document.getElementById("listContent02").innerHTML = data[4].list.thing2;
document.getElementById("listContent03").innerHTML = data[4].list.thing3;
document.getElementById("listContent04").innerHTML = data[4].list.thing4;

document.getElementById("listSubTopic02").innerHTML = data[4].list.listSubTopic02;
document.getElementById("listContent05").innerHTML = data[4].list.thing5;
document.getElementById("listContent06").innerHTML = data[4].list.thing6;
document.getElementById("listContent07").innerHTML = data[4].list.thing7;
document.getElementById("listContent08").innerHTML = data[4].list.thing8;
document.getElementById("listContent09").innerHTML = data[4].list.thing9;