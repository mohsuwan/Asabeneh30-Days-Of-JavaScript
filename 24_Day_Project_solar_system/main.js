const myarray = [
  {
    name: "earth",
    graph: 9.8,
  },
  {
    name: "jupiter",
    graph: 23.1,
  },
  {
    name: "mars",
    graph: 3.7,
  },
  {
    name: "mercury",
    graph: 3.7,
  },
  {
    name: "moon",
    graph: 1.6,
  },
  {
    name: "neptune",
    graph: 11,
  },
  {
    name: "pluto",
    graph: 0.7,
  },
  {
    name: "saturn",
    graph: 9,
  },
  {
    name: "uranus",
    graph: 8.7,
  },
  {
    name: "venus",
    graph: 8.9,
  },
];

const gravity = 9.8;
const weightOfObject = (mass, plant) => {
  const plangraph = myarray.find((myArrayPlant) => myArrayPlant.name === plant);
  return (mass * (plangraph.graph / gravity)).toFixed(2);
};

const handleSubmit = () => {
  // defimg.innerHTML = "defolt"; // to reset the value
// console.log(mass.value);
// console.log(planetSel.value);

  if (!mass.value) {
    defimg.style.display = "none";
    messageTow.style.display = "none";
    finelMessage.style.display = "none";

    errorMessage.style.display = "flex";

    return;
  }
  if (!planetSel.value) {
    defimg.style.display = "none";
    errorMessage.style.display = "none";
    messageTow.style.display = "flex";
    return;
  }
  defimg.style.display = "none";
  errorMessage.style.display = "none";
  messageTow.style.display = "none";
  finelMessage.style.display = "flex";
  planetImg.src = `./images/${planetSel.value}.png`;
  planetImg.style.width = "200px";
  planetImg.style.height = "200px";
  planetImg.style.display = "flex"; 
  planetImg.style.justifyContent = "flex-start !important";
  // console.log(weightOfObject(mass.value, planetSel.value))
  nameOf.innerHTML = planetSel.value;
  // console.log(weightOfObject(mass.value, planetSel.value) + " N");
  widthOfAll.innerHTML = weightOfObject(mass.value, planetSel.value) + " N";
  // console.log(planetSel.value)
  // alert(planetSel());
};

const button = document.getElementById("submit_button");
button.addEventListener("click", handleSubmit);
const mass = document.getElementById("mass");
const planetSel = document.getElementById("planetsel");
// button.addEventListener("change",  weightOfObject(mass, ));
// const erroMessage = document.getElementById("error_message");
// ###################################################################

const defimg = document.getElementById("defimg");
const errorMessage = document.getElementById("error_message");
const messageTow = document.getElementById("message_tow");
const planetImg = document.getElementById("planet-img");
const finelMessage = document.getElementById("finel_message");
// #############################################33333333333333333333333333
const widthOfAll = document.getElementById("width_of_all");

const nameOf = document.getElementById("name_of");
