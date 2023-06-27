window.addEventListener("load", getPageValue)
window.addEventListener('load', getValuesFromLocalStorage);

function getPageValue() {
    let sectionState = localStorage.getItem("sectionState")
    if (sectionState === "visible") {
        showSection2()
    } else {
        showSection1()
    }
}

function getValuesFromLocalStorage() {
    var myArray = JSON.parse(localStorage.getItem("categorie")) || [];
    console.log(myArray);
    var list = document.querySelector('.form-select');
    console.log(list);
    if (myArray.length === 0 || !list) {
        return;
    }
    myArray.forEach(function (value) {
        let option = `<option class="select">${value}</option>`;
        list.innerHTML += option;
    });
}


function showSection2() {
    document.querySelector(".section1").style.display = "none";
    document.querySelector(".section2").style.display = "block";
}

function showSection1() {
    document.querySelector(".section2").style.display = "none";
    document.querySelector(".section1").style.display = "block";
}