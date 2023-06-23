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


