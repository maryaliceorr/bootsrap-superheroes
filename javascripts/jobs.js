

const writeToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
}

const superheroString = (superheroArray) => {
    let superheroString = "";
    for(let i=0; i<superheroArray.length; i++) {
        superheroString += `<li>`;
        superheroString +=    `<a href="#" data-hero-id="${superheroArray[i].id}">${superheroArray[i].name}</a>`;
        superheroString += `</li>`;
    }
    writeToDom(superheroString, "awesome-dropdown");
};


function xhrCall (){
    const data = JSON.parse(this.responseText);
    superheroString(data.superheroes);
}

function nope () {
    console.log("nope");
}

const startTheThing = () => {
    let request = new XMLHttpRequest();
    request.addEventListener("load", xhrCall);
    request.addEventListener("error", nope);
    request.open("GET", "../db/superheroes.json");
    request.send();
};

startTheThing();