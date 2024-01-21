const apikey = "tVKXrkJWQxCnJbht9uQK5Vby_sab9PxEI_GMdSvEf4Y";
const formEl = document.querySelector('form');
const inputEl = document.getElementById('input');
const SearchResults = document.querySelector(".search-results");
const Showmore = document.getElementById("show-more-button");

let inputdata = "";
let page = 1;

async function searchImages() {
    inputdata = inputEl.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${apikey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        SearchResults.innerHTML = "";
    }

    results.map((result) => { 
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        SearchResults.append(imageWrapper);
    });

    page++;

    if (page > 1) {
        Showmore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault(); 
    page = 1;
    searchImages();
});

Showmore.addEventListener("click", () => {
    searchImages();
});
