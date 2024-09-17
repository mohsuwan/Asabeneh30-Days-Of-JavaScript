const arrayOne = [
  "instructor",
  "programmer",
  "edioctor",
  "motivational speaker",
  "content moderator",
];
const arrayTow = [
  "React",
  "JavaScript",
  "Mongodb",
  "Resux",
  "Nampy",
  "Node",
  "Html",
];
const firstThings = document.getElementById("first-things");

(() => {
  const displayWords = () => {
    arrayOne.forEach((arrayOne, index) => {
      setTimeout(() => {
        firstThings.innerHTML = "";
        const word = document.createElement("span");
        word.innerHTML = arrayOne;
        firstThings.appendChild(word);
      }, 2000 * index);
    });
  };

  const startDisplayingWords = () => {
    displayWords();
    setTimeout(startDisplayingWords, 2000 * arrayOne.length);
  };

  startDisplayingWords();
})();
// const index = arrayTow.length;
// const colors = [];
// for (let i = 0; i < arrayTow.length; i++) {
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   colors.push(randomColor);
// }

const socendThings = document.getElementById("socend-things");
(() => {
  const displayWords = () => {
    const word = document.createElement("span");
    word.className = "";

    arrayTow.forEach((arrayTow, index) => {
      setTimeout(() => {
        socendThings.innerHTML = "";
        word.className = arrayTow;
        word.innerHTML = ` ${arrayTow}`;    
        word.style.fontSize = "20px";
        word.style.fontWeight = "bold";
        // word.style.transitionTimingFunction = '1s'
        // word.style.transition = "2s";
        // word.style.color = `${colors}`;
        socendThings.appendChild(word);
      }, 2000 * index);
    });
  };

  const startDisplayingWords = () => {
    displayWords();
    setTimeout(startDisplayingWords, 2000 * arrayTow.length);
  };

  startDisplayingWords();
})();
