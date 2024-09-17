const countriesTick = document.getElementById("countriesTick");

const countriesIncludesWhith = (input) => {
  countriesTick.innerHTML = "";
  countries
    .filter((item) => item.toLowerCase().includes(input.toLowerCase()))
    .forEach((countries) => {
      const card = document.createElement("li");
      
      card.innerHTML = countries;
      card.style.listStyle = "none";
      card.style.backgroundImage =
        "linear-gradient(rgba(26, 62, 204, 0.936),rgba(139, 160, 244, 0.217)), url(./images/map_image.jpg)";
      card.style.backgroundSize = "cover";
      card.style.color = "white";
      card.style.height = "100px";
      card.style.width = "100px";
      card.style.display = "flex";
      card.style.justifyContent = "center";
      card.style.alignItems = "center";
      card.style.flexWrap = "wrap";
      // card.style.flexDirection = "culomn";

      countriesTick.appendChild(card);
    });
};
console.log(countries);

// ###############################################################################1
const countriesStartingWhith = (input) => {
  countriesTick.innerHTML = "";
  countries
    .filter((item) => item?.toLowerCase().startsWith(input?.toLowerCase()))
    .forEach((countries) => {
      const card = document.createElement("li");
      card.innerHTML = countries;
      card.style.backgroundImage =
        "linear-gradient(rgba(26, 62, 204, 0.936),rgba(139, 160, 244, 0.217)), url(./images/map_image.jpg)";
      card.style.backgroundSize = "cover";
      card.style.color = "white";
      card.style.height = "100px";
      card.style.width = "100px";
      card.style.display = "flex";
      card.style.justifyContent = "center";
      card.style.alignItems = "center";
      card.style.flexWrap = "wrap";

      countriesTick.appendChild(card);
    });
};
// ###############################################################################1

const reverseCont = () => {
  countriesTick.innerHTML = "";
  countries.reverse().forEach((countries) => {
    const card = document.createElement("li");
    card.innerHTML = countries;
    card.style.listStyle = "none";
    card.style.backgroundImage =
      "linear-gradient(rgba(26, 62, 204, 0.936),rgba(139, 160, 244, 0.217)), url(./images/map_image.jpg)";
    card.style.backgroundSize = "cover";
    card.style.color = "white";
    card.style.height = "100px";
    card.style.width = "100px";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.flexWrap = "wrap";
    card.style.flexDirection = "culomn";

    countriesTick.appendChild(card);
  });
  // alert(countries.reverse());
};
// ###############################################################################1

const inputCan = document.getElementById("input_can");
const form = document.getElementById("buttonForm");

inputCan.addEventListener("input", (e) => {
  console.log(form?.value, "name");
  if (form?.value == "starting_word") {
    countriesStartingWhith(e.target.value);
  } else {
    countriesIncludesWhith(e.target.value);
  }
});

const startingWord = document.getElementById("starting_word");
startingWord.addEventListener("click", (e) => {
  e.preventDefault();
  form.value = "starting_word";
});

const searchWord = document.getElementById("search_word");
searchWord.addEventListener("click", (e) => {
  e.preventDefault();
  form.value = "search_word";
});
