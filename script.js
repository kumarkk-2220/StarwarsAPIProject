//akabab.github.io/starwars-api/api/id/1.json
const name = document.getElementById("name");
const eyecolor = document.getElementById("eyecolor");
const gender = document.getElementById("gender");
const image = document.querySelector("img");

let button = document.querySelector("button");
button.addEventListener("click", (e) => {
    e.preventDefault();
    name.innerHTML = "<em>Loading</em>";
    eyecolor.innerHTML = "<em>Loading</em>";
    gender.innerHTML = "<em>Loading</em>";
    image.innerHTML = "<em>Loading</em>";
    let randomCharacterNumber = Math.ceil(Math.random() * 88);
    if (randomCharacterNumber === 0) {
        randomCharacterNumber = 1;
    } else {
        randomCharacterNumber = randomCharacterNumber;
    }
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomCharacterNumber}.json`)
        .then((response) => response.json())
        .then((character) => {
            name.innerText = character["name"];
            eyecolor.innerText = character["eyeColor"];
            gender.innerText = character["gender"];
            try {
                image.src = character["image"];
            } catch {
                console.error();
            }
        });
});
