console.log("hello");

const writeToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
}

const superheroString = (superheroArray) => {
    let superheroString = "";
    for(let i=0; i<superheroArray.length; i++) {
        superheroString += `<div class="col-md-3">`
        superheroString += `<div class="panel">`;
        superheroString +=   `<div class="panel-heading">`;
        superheroString +=      `<h4 class="panel-title">${superheroArray[i].name}</h4>`;
        superheroString +=   `</div>`;
        superheroString +=     `<div class="panel-body">`;
        if(superheroArray[i].gender === "Male") {
            superheroString +=       `<img class="charImage male" src="${superheroArray[i].image}">`; 
        } else {
            superheroString +=       `<img class="charImage female" src="${superheroArray[i].image}">`;
        }
        superheroString +=       `<p class="charDescription">${superheroArray[i].description}</p>`;
        superheroString +=      `</div>`;
        superheroString +=  `</div>`;
        superheroString +=  `</div>`; 
    }
    writeToDom(superheroString, "superhero-holder");
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