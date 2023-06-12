//call to all entries endpoint
//fetch list of all jokes
//show setup and type properties and btn to view punchline
//btns to filter entries by general or programming

const jokesAPI = "https://api.noroff.dev/api/v1/jokes";
const btnsContainer = document.querySelector(".fetchedBtns")
const jokeContainer = document.querySelector(".fetchedJokes");

fetch(jokesAPI)
    .then(res => res.json())
    .then(data => {
        data.forEach(joke => {
            displayJoke(joke);
        });
        filterBtns();
    })
    .catch(error => {
        console.log(error);
    });

function displayJoke(joke) {
    const fetchedJoke = document.createElement("div");

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

    jokeContainer.append(fetchedJoke)

    punchlineBtn.addEventListener("click", () => {
        window.location.href = `joke.html?id=${joke.id}`;
    });

}

function filterBtns() {
    const fetchedBtns = document.createElement("div");

    const generalBtn = document.createElement("button");
    generalBtn.classList.add("generalBtn");
    generalBtn.innerText = "General";
    fetchedBtns.appendChild(generalBtn);

    const programmingBtn = document.createElement("button");
    programmingBtn.classList.add("programmingBtn");
    programmingBtn.innerText = "Programming";
    fetchedBtns.appendChild(programmingBtn);

    btnsContainer.appendChild(fetchedBtns)


}