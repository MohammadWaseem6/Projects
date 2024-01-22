const genButton = document.querySelector(".generator");
const memeTitle = document.querySelector(".meme-title");
const memeAuth = document.querySelector(".meme-author");
const memeImage = document.querySelector(".memeImage");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuth.innerHTML = author;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        });
};

genButton.addEventListener("click", generateMeme);
