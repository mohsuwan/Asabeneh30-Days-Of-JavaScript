let first = "30 DAYS JAVASCRIPT CHALLENGE 2020 ASABENE HETYEH";
const firstDesign = document.getElementById("first-design");
const container = document.getElementById("container");
let firstArray = first.split("");
firstDesign.style.fontSize = "35px";
(() => {
  const firstfun = () => {
    firstDesign.innerHTML = "";
    firstArray.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.letterSpacing = "20px";
      span.style.color =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      var randomNumber = Math.random();
      switch (true) {
        case randomNumber > 0.66:
          span.style.fontFamily = "Verdana";
          break;
        case randomNumber > 0.33:
          span.style.fontFamily = "Arial";
          break;
        default:
          span.style.fontFamily = "Lucida Sans";
      }
      //   span.style.fontFamily = Math.random() > 0.5 ? "Verdana" : "Lucida Sans";
      firstDesign.appendChild(span);
    });
    container.style.backgroundColor = firstDesign.style.color =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  const startDisplayingWords = () => {
    firstfun();
    setTimeout(startDisplayingWords, 2000);
  };

  startDisplayingWords();
})();
