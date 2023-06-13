const urlParams = new URLSearchParams(window.location.search);
const jokeId = urlParams.get("id");

const jokesAPI = "https://api.noroff.dev/api/v1/jokes/";
const jokeContainer = document.querySelector(".fetchedJokes");

fetch(jokesAPI + jokeId)
    .then(res => res.json())
    .then(joke => {
        displayJoke(joke);
    })
    .catch(error => {
        console.log(error);
    });

function displayJoke(joke) {
    const fetchedJoke = document.createElement("div");
    fetchedJoke.classList.add("fetchedJokeDiv");
    fetchedJoke.setAttribute("data-type", joke.type);

    const jokeSetup = document.createElement("p");
    jokeSetup.classList.add("setup");
    jokeSetup.innerText = `${joke.setup}`;
    fetchedJoke.appendChild(jokeSetup);

    const jokeType = document.createElement("p");
    jokeType.classList.add("type");
    jokeType.innerText = `Type: ${joke.type}`;
    fetchedJoke.appendChild(jokeType);

    const punchlineBtn = document.createElement("button");
    punchlineBtn.classList.add("view-punchline");
    punchlineBtn.innerText = `View Punchline`;
    fetchedJoke.appendChild(punchlineBtn);

    const jokePunchline = document.createElement("p");
    jokePunchline.classList.add("punchline");
    jokePunchline.innerText = `${joke.punchline}`;
    jokePunchline.style.display = "none";
    fetchedJoke.appendChild(jokePunchline);

    jokeContainer.append(fetchedJoke)

    punchlineBtn.addEventListener("click", () => {
        if (jokePunchline.style.display === "none") {
            jokePunchline.style.display = "block";
            punchlineBtn.innerText = "Hide Punchline";
        } else {
            jokePunchline.style.display = "none";
            punchlineBtn.innerText = "View Punchline";
        }
    });

}

const backBtn = document.querySelector(".back");

backBtn.addEventListener("click", () => {
    history.back()
})