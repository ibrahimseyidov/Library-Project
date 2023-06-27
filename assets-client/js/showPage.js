const bookTop = document.querySelector(".book-top");
const bookImageContainer = document.querySelector(".book-right-container");

window.addEventListener("load", getPageValue);

function getPageValue() {
    let sectionState = localStorage.getItem("sectionState");
    if (sectionState === "visible") {
        showSection1()
    } else {
        showSection2()
    }
}

function showSection1() {
    $("#bookInfo").show()
    $(".categorie-page").hide();
    let publishYear = localStorage.getItem("publishYear");
    let bookName = localStorage.getItem("bookName");
    let authorName = localStorage.getItem("authorName");
    let description = localStorage.getItem("description");
    let bookImage = localStorage.getItem("bookImage");

    bookTop.innerHTML = `<div class="about-book">

    <div>
        <span>${publishYear}</span>
    </div>

    <div class="content-book">
        <h2>${bookName}</h2>
        <span>2 days ago added</span>
        <h3>${authorName}</h3>
        <p>
            ${description}
        </p>
        <button>More details</button>
    </div>

    </div>`

    bookImageContainer.innerHTML = `<div class="book-right-container">
<img src="${bookImage}" alt="product-book">
</div>`

}

function showSection2() {
    $("#bookInfo").hide()
    $(".categorie-page").show()
}
