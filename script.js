const btnElem = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");




btnElem.addEventListener('click', async function () {
    try {
        btnElem.disabled = true;
        btnElem.innerText = "Loading..."
        animeName.innerText = "Updating..."
        animeImg.src = "./image/spinner.svg";

        const response = await fetch('https://api.catboys.com/img')
        const data = await response.json();

        btnElem.innerText = "Get Anime"
        btnElem.disabled = false;
        animeContainer.style.display = 'block';
        animeImg.src = data.url;
        animeName.innerText = data.artist
    } catch (error) {
        console.log(error);
        btnElem.disabled = false;
        btnElem.innerText = "Get Anime";
        animeName.innerText = "An error happend, please try again later";
    }
});