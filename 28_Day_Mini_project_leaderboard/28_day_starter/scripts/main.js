// window.localStorage.clear();

let addBtn = document.getElementById("add-btn");
let allInfoCard = {
  firstName: "",
  lastName: "",
  country: "",
  Score: 0,
};

const card = document.getElementById("card");
let myarray = JSON.parse(window.localStorage.getItem("myarray")) || [];
console.log(myarray);
// let myarray = [];

var deleteBtn;
var increase;
var decrease;
// addBtn.addEventListener("lo")
addBtn.addEventListener("click", () => {
  const firstNameIn = document.getElementById("First-Name-In").value;
  const lastNameIn = document.getElementById("Last-Name-In").value;
  const countryIn = document.getElementById("country-In").value;
  const playerScoreIn = document.getElementById("Player-score-In").value;
  const required = document.getElementById("required");
  if (
    (!firstNameIn || !lastNameIn || !countryIn || !playerScoreIn) &&
    addBtn?.value != "firstRender"
  ) {
    required.style.display = "flex";
  } else {
    required.style.display = "none";

    allInfoCard = {
      firstName: firstNameIn,
      lastName: lastNameIn,
      country: countryIn,
      Score: playerScoreIn,
    };

    addBtn?.value != "firstRender" && myarray.push(allInfoCard);
    let setjosnString = JSON.stringify(myarray);
    window.localStorage.setItem("myarray", setjosnString);
    console.log(myarray);
    let getjosnString = JSON.parse(setjosnString);

    window.localStorage.getItem("myarray", getjosnString);

    card.innerHTML = "";

    myarray.map((player, index) => {
      let playerCard = document.createElement("li");
      let playerInfoContainer = document.createElement("div");
      let playerName = document.createElement("h4");
      let playerTime = document.createElement("p");
      let playercountry = document.createElement("h4");
      let playerScore = document.createElement("h4");
      deleteBtn = document.createElement("button");
      increase = document.createElement("button");
      decrease = document.createElement("button");
      playerCard.setAttribute("id", index);
      deleteBtn.classList.add("buttonInfo");
      deleteBtn.setAttribute("id", index);
      increase.classList.add("buttonInfo");
      decrease.classList.add("buttonInfo");

      playerTime.innerText = new Date();
      playerName.innerText = `${player.firstName} ${player.lastName}`;
      playercountry.innerText = player.country;
      playerScore.innerHTML = player.Score;

      deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
      deleteBtn.style.width = "30px";
      deleteBtn.style.height = "30px";
      deleteBtn.style.fontSize = "14px";
      deleteBtn.style.border = "none";
      deleteBtn.style.borderRadius = "50%";

      increase.innerHTML = "+5";
      increase.style.width = "30px";
      increase.style.height = "30px";
      increase.style.fontSize = "14px";
      increase.style.border = "none";
      increase.style.borderRadius = "50%";

      decrease.innerHTML = "-5";
      decrease.style.width = "30px";
      decrease.style.height = "30px";
      decrease.style.fontSize = "14px";
      decrease.style.border = "none";
      decrease.style.borderRadius = "50%";

      // deleteBtn.removeChild = playerCard.allInfoCard;

      playerInfoContainer.classList.add("playerInfo");
      playerInfoContainer.appendChild(playerName);
      playerInfoContainer.appendChild(playerTime);

      deleteBtn.addEventListener("click", () => {
        if (playerCard) {
          myarray.splice(myarray.indexOf, 1);
          window.localStorage.setItem("myarray", JSON.stringify(myarray));
          playerCard.remove();
          console.log(myarray);
        }
      });
      increase.addEventListener("click", () => {
        let playerScorenum = parseInt(playerScore.innerHTML);
        let incplayerScore = playerScorenum + 5;
        playerScore.innerHTML = `${incplayerScore}`;
      });
      decrease.addEventListener("click", () => {
        let playerScorenum = parseInt(playerScore.innerHTML);
        let incplayerScore = playerScorenum - 5;
        playerScore.innerHTML = `${incplayerScore}`;
      });

      playerCard.appendChild(playerInfoContainer);
      playerCard.appendChild(playercountry);
      playerCard.appendChild(playerScore);
      playerCard.appendChild(deleteBtn);
      playerCard.appendChild(increase);
      playerCard.appendChild(decrease);

      card.appendChild(playerCard);
    });

    document.getElementById("First-Name-In").value = "";
    document.getElementById("Last-Name-In").value = "";
    document.getElementById("country-In").value = "";
    document.getElementById("Player-score-In").value = "";
    if (addBtn.value) addBtn.value = null;
  }
});
(() => {
  addBtn.value = "firstRender";
  addBtn.click();
})();
const countryOut = document.getElementById("country-Out");
const namePlayer = document.getElementById("name-player-Out");
const PlayerscoreOut = document.getElementById("Player-score-Out");
