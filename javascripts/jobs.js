

let selectedHero = "";

const writeToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
}

const superheroStrings = (superheroArray) => {
    let superheroString = "";
    for(let i=0; i<superheroArray.length; i++) {
        superheroString += `<li>`;
        superheroString +=    `<a class="hero-name" href="#" data-hero-id="${superheroArray[i].id}">${superheroArray[i].name}</a>`;
        superheroString += `</li>`;
    }
    writeToDom(superheroString, "awesome-dropdown");
};

const selectHero = (e) => {
    selectedHero = e.target.dataset.heroId;
    document.getElementById("awesome-button").classList.add("hide");
    genericHeroRequest(loadFileforSingleHero);
}

const addheroSelectionEventListeners = () => {
    const heroNames = document.getElementsByClassName("hero-name");
    for (let j=0; j<heroNames.length; j++) {
    heroNames[j].addEventListener("click", selectHero);
    }
}

const displaySuperhero = heroes => {
    let domString = "";
    heroes.forEach(hero => {
      if (hero.id === selectedHero) {
        domString += `<div class="row">`;
        domString += `<div class="col-sm-4">`;
        if (hero.gender === "Male") {
          domString += `<img class="charImage maleImage" src="${
            hero.image
          }">`;
        } else {
          domString += `<img class="charImage femaleImage" src="${
            hero.image
          }">`;
        }
        domString += `</div>`;
        domString += `<div class="col-sm-6">`;
        domString += `<h2>Selected Hero: ${hero.name}</h2>`;
        domString +=     `<p class='charDescription'>${hero.description}</p>`;
        domString += `</div>`;
      }
    });
    writeToDom(domString, "selected-hero");
  };

 
function loadFileforSingleHero () {
    const data = JSON.parse(this.responseText);
    displaySuperhero(data.superheroes);
}




function xhrCall (){
    const data = JSON.parse(this.responseText);
    superheroStrings(data.superheroes);
    addheroSelectionEventListeners();
}

function nope () {
    console.log("nope");
}

const genericHeroRequest = (successFunction) => {
    let request = new XMLHttpRequest();
    request.addEventListener("load", successFunction);
    request.addEventListener("error", nope);
    request.open("GET", "../db/superheroes.json");
    request.send();
};

const startTheThing = () => {
    genericHeroRequest(xhrCall);
};

startTheThing();