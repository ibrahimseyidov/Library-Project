window.addEventListener("load", getPageValue)
window.addEventListener('load', getValuesFromLocalStorage);

$(".type-add").on("click", function () {
    $(".coment").css("display", "flex")
})

$("#xBtn").on("click", function () {
    $(".coment").css("display", "none")
})

$(".type-btn").on("click", function () {
    let inpVal = $("#type").val();
    let option = `<option class="select">${inpVal}</option>`
    let myArray = JSON.parse(localStorage.getItem("categorie")) || [];
    myArray.push(inpVal);
    localStorage.setItem("categorie", JSON.stringify(myArray))
    $(".form-select").append(option)
    $("#type").val("");
})

function getPageValue() {
    let sectionState = localStorage.getItem("sectionState")
    if (sectionState === "visible") {
        showSection2()
    } else {
        showSection1()
    }
}

function showSection1() {
    document.querySelector(".section2").style.display = "none";
    document.querySelector(".section1").style.display = "block";
}

function showSection2() {
    document.querySelector(".section1").style.display = "none";
    document.querySelector(".section2").style.display = "block";
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

