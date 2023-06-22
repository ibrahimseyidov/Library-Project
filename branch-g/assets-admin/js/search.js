const searchInp = document.querySelector("#searchInp");
const searchResults = document.querySelector("#searchResults");
const searchBtn = document.querySelector("#searchBtn");
let timeoutId;
let bookData;

searchInp.addEventListener("input", function (event) {
    clearTimeout(timeoutId);

    const searchQuery = event.target.value;

    $('#example').shCircleLoader({
        color: "#720418",
    })

    timeoutId = setTimeout(function () {
        if (searchQuery !== "") {
            performSearch(searchQuery);
        } else {
            clearResults();
            return
        }
    }, 500);
});

function performSearch(searchQuery) {
    const apiKey = "AIzaSyA6oyTujzFSXalmFHifiNfT9vA1MsZK0-M";
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            bookData = data;
            displayResults(data);
        })
        .catch(error => {
            console.error("API isteği sırasında bir hata oluştu:", error);
        });
}

function displayResults(data) {
    searchResults.innerHTML = "";

    if (data.totalItems === 0) {
        searchResults.innerHTML = "<p class='no-result'>No results found.</p>";
        return;
    }

    let bookIDArr = []

    data.items.forEach(item => {
        const title = item.volumeInfo.title;
        bookIDArr.push(item.id)

        searchResults.innerHTML += `<div class="clock">
        <div style="display:none" id="resultBookID">${item.id}</div>
       <img src="./assets-admin/img/clock.svg" />
       <p class="name">${title}</p>
     </div>`

    });


    $(".grey").on("click", ".clock", function () {
        clearResults()
        $(searchInp).val("")
        let dynamicBookId = $(this).children(":first-child").text()

        bookIDArr.forEach((bookId) => {
            if (bookId == dynamicBookId) {
                data.items.forEach((item => {
                    if (item.id == bookId) {
                        const dateStr = item.volumeInfo.publishedDate
                        const date = new Date(dateStr);
                        const year = date.getFullYear()
                        console.log(item);
                        $("#bookInp").val(item.volumeInfo.title);
                        $("#author").val(item.volumeInfo.authors[0]);
                        $("#image").val(item.volumeInfo.imageLinks.smallThumbnail);
                        $("#year").val(item.volumeInfo.publishedDate);

                        if (year < 2023) {
                            $("#checkBox").prop("checked", false);
                        }
                        else if (year == 2023) {
                            $("#checkBox").prop("checked", true);
                        }
                        $("#desc").val(item.volumeInfo.subtitle);
                    }
                }))
            }
        })

    })

}

function clearResults() {
    searchResults.innerHTML = "";
}



