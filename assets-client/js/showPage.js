const bookTop = document.querySelector(".book-top");
const bookImageContainer = document.querySelector(".book-right-container");
const commentArea = document.querySelector("#bookComment");

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
            "Content-Type": "application/json"
        },
    };

    $.ajax(settings)
        .then((response) => {
            for (let i = 101; i < response.length; i++) {
                let now1 = moment()
                let publishDates = response[i].userData.title
                let comment = response[i].userData.body
                var diffSeconds = now1.diff(publishDates, 'seconds');
                var diffMinutes = now1.diff(publishDates, 'minutes');
                var diffHours = now1.diff(publishDates, 'hours');

                let displayText = "";

                if (diffSeconds < 60) {
                    displayText = 'A few seconds ago';
                } else if (diffMinutes < 60) {
                    displayText = diffMinutes + ' minutes ago';
                } else if (diffHours < 24) {
                    displayText = diffHours + ' hours ago';
                } else {
                    displayText = postTime.format('YYYY-MM-DD HH:mm');
                }
                commentArea.innerHTML += `<div class="book-comment">
                            <div class="anonim-comment">
                                <span>anonim</span>
                                <span>${displayText}</span>
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
    // localStorage.removeItem("publishYear");
    // localStorage.removeItem("bookName");
    // localStorage.removeItem("authorName");
    // localStorage.removeItem("description");
    // localStorage.removeItem("bookImage");
}
