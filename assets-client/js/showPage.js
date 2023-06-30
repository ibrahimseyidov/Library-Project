const bookTop = document.querySelector(".book-top");
const bookImageContainer = document.querySelector(".book-right-container");
const commentArea = document.querySelector("#bookComment");
const bookInfo = document.querySelector("#bookInfo");

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

    if (publishYear && bookName && authorName && description && bookImage) {

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



    var settings = {
        "url": "https://blog-api-t6u0.onrender.com/posts",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "X-API-Key": "PMAK-649e116ff4abfc0031a64238-XXXX"
        },
    };

    $.ajax(settings)
        .then((response) => {
            console.log(response);
            for (let i = 100; i < response.length; i++) {
                let title = response[i].title
                let comment = response[i].body
                commentArea.innerHTML += `<div class="book-comment">
                            <div class="anonim-comment">
                                <span>anonim</span>
                                <span>${title}</span>
                            </div>
                            <div class="anonim-para">
                                <p>${comment}</p>
                            </div>
                        </div>`
            }
        })
        .catch(() => {
            console.log("error");
        })


}

function showSection2() {
    $("#bookInfo").hide()
    $(".categorie-page").show()
}
