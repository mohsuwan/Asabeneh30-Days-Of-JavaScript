const x = countries.sort((a, b) => b?.population - a?.population).slice(0, 10);
// #######################################################################

const totalvalue = x[0].population;

let y = Object.entries(
  countries
    .reduce((langs, Obj) => {
      Obj.languages.forEach((z) => langs.push(z));
      return langs;
    }, [])
    .reduce((dict, lang) => {
      dict[lang] = (dict[lang] || 0) + 1;
      return dict;
    }, {})
)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

const totalvalueOF = y[0][1];

const percentOF = (numberOFLanguageSpeakers) => {
  return (numberOFLanguageSpeakers / totalvalueOF) * 100;
};

const percent = (population) => {
  return (population / totalvalue) * 100;
};

const populationFan = () => {
  final.innerHTML = "";
  socend.innerHTML = "";
  first.innerHTML = "";
  dataMining.style.display = "flex";
  paraPopulation.style.display = "flex";
  paraLanguages.style.display = "none";
  x.forEach(({ population, name }) => {
    let m2nes = document.createElement("li");
    m2nes.innerHTML = population;
    m2nes.style.listStyle = "none";
    m2nes.style.fontSize = "20px";
    final.appendChild(m2nes);
    const width = percent(population);
    let moath = document.createElement("span");
    moath.innerHTML = "";
    moath.style.width = `${width}%`;
    moath.style.height = "20px";
    socend.appendChild(moath);
    let mnes = document.createElement("li");
    mnes.innerHTML = name;
    mnes.style.listStyle = "none";
    mnes.style.fontSize = "20px";

    first.appendChild(mnes);
  });
};

const languagesFan = () => {
  dataMining.style.display = "flex";
  paraLanguages.style.display = "flex";
  paraPopulation.style.display = "none";
  first.innerHTML = "";
  final.innerHTML = "";
  socend.innerHTML = "";

  y.forEach((z) => {
    const newDiv = document.createElement("li");
    newDiv.innerHTML = z[0];
    first.appendChild(newDiv);
    newDiv.style.listStyle = "none";
    newDiv.style.fontSize = "20px";

    const valval = percentOF(z[1]);
    const midDiv = document.createElement("span");
    midDiv.innerHTML = "";
    midDiv.style.width = `${valval}%`;
    midDiv.style.height = "20px";

    socend.appendChild(midDiv);

    const popDiv = document.createElement("li");
    popDiv.innerHTML = z[1];
    final.appendChild(popDiv);
    popDiv.style.listStyle = "none";
    popDiv.style.fontSize = "20px";
  });
};

const populationBtn = document.getElementById("population_btn");
const languagesBtn = document.getElementById("languages_btn");
const paraLanguages = document.getElementById("para_languages");
const paraPopulation = document.getElementById("para_population");
const final = document.getElementById("final");
const first = document.getElementById("first");
const socend = document.getElementById("socend");
const dataMining = document.getElementById("data_mining");
// *******************************************************************************************************

populationBtn.addEventListener("click", populationFan);
languagesBtn.addEventListener("click", languagesFan);
