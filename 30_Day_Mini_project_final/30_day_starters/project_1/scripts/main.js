// console.log(countries)
// const searchInput = document
//   .getElementById("searchInput")
//   .onclick(handlClick(""));
// myarray = [];
const allCountries = document.getElementById("allCountries");
const allButtons = document.getElementById("allButtons");
const countName = document.getElementById("countName");
const searchInput = document.getElementById("searchInput");
const countCapital = document.getElementById("countCapital");
const countPopulation = document.getElementById("countPopulation");

// countries.forEach((country) =>
//   country.languages.forEach((language) =>
//     console.log(`<span>${language}</span>`)
//   )
// );

// allCountries.innerHTML = countries.sort();
// const countryfan = countries.map((country) => {
//   const card = document.createElement("div");
//   //   card.style.width = "100px";
//   const languages = country.languages
//     .map(
//       (language) => `<span style="padding-inline-end: 6px;">${language},</span>`
//     )
//     .splice("");

//   // console.log(country);
//   const cardBody = `
//     <img src="${country?.flag}" alt="${country?.name}" />
//     <h4>${country?.name}</h4>
//     <div>
//     <p><span>Capital:</span><span>${country?.capital}</span></p>
//     <p><span>Languages:</span> ${languages}</p>
//     <p><span>Population:</span><span>${country?.population}</span></p>
//     </div>
//     `;

//   card.innerHTML = cardBody;
//   card.style.backgroundColor = "white";
//   card.style.height = "250px";
//   card.style.width = "200px";
//   card.style.display = "flex";
//   card.style.flexDirection = "column";
//   card.style.alignItems = "center";
//   card.style.padding = "10px";
//   card.style.gap = "25px";
//   allCountries.append(card);
//   // console.log(country,"country");
// //   return country;
// });

searchInput.addEventListener("input", (input) => {
  const string = input.target.value;
  if (!string) {
    allCountries.innerHTML = "";
    return;
  }
  const incContry = countries.filter(
    (country) => country.name.toLowerCase().includes(string.toLowerCase())
    //   country.capital?.toLowerCase().includes(string.toLowerCase())
  );
  const incCapetal = countries.filter((country) =>
    country.capital?.toLowerCase().includes(string.toLowerCase())
  );
  const incPopulation = countries.sort((a,b) => a.population - b.population);
  const compoIncludesCap = incCapetal.concat(incContry);
  const compoIncludesCant = incContry.concat(incCapetal);
  allCountries.innerHTML = "";
  //   compoIncludesCap?.forEach((country) => {
  //     const card = document.createElement("div");
  //     //   card.style.width = "100px";
  //     const languages = country.languages
  //       .map(
  //         (language) =>
  //           `<span style="padding-inline-end: 6px;">${language},</span>`
  //       )
  //       .splice("");

  //     // console.log(country);
  //     const cardBody = `
  //         <img src="${country?.flag}" alt="${country?.name}" />
  //         <h4>${country?.name}</h4>
  //         <div>
  //         <p><span>Capital:</span><span>${country?.capital}</span></p>
  //         <p><span>Languages:</span> ${languages}</p>
  //         <p><span>Population:</span><span>${country?.population}</span></p>
  //         </div>
  //         `;

  //     card.innerHTML = cardBody;
  //     card.style.backgroundColor = "white";
  //     card.style.height = "250px";
  //     card.style.width = "200px";
  //     card.style.display = "flex";
  //     card.style.flexDirection = "column";
  //     card.style.alignItems = "center";
  //     card.style.padding = "10px";
  //     card.style.gap = "25px";
  //     allCountries.append(card);
  //   });
  //   incCapetal?.forEach((country) => {
  //     const card = document.createElement("div");
  //     //   card.style.width = "100px";
  //     const languages = country.languages
  //       .map(
  //         (language) =>
  //           `<span style="padding-inline-end: 6px;">${language},</span>`
  //       )
  //       .splice("");

  //     // console.log(country);
  //     const cardBody = `
  //         <img src="${country?.flag}" alt="${country?.name}" />
  //         <h4>${country?.name}</h4>
  //         <div>
  //         <p><span>Capital:</span><span>${country?.capital}</span></p>
  //         <p><span>Languages:</span> ${languages}</p>
  //         <p><span>Population:</span><span>${country?.population}</span></p>
  //         </div>
  //         `;

  //     card.innerHTML = cardBody;
  //     card.style.backgroundColor = "white";
  //     card.style.height = "250px";
  //     card.style.width = "200px";
  //     card.style.display = "flex";
  //     card.style.flexDirection = "column";
  //     card.style.alignItems = "center";
  //     card.style.padding = "10px";
  //     card.style.gap = "25px";
  //     allCountries.append(card);
  //   });
  countName.addEventListener("click", () => {
    compoIncludesCap.reverse().forEach(() => {
      allCountries.innerHTML = "";
      compoIncludesCap?.forEach((country) => {
        const card = document.createElement("div");
        //   card.style.width = "100px";
        const languages = country.languages
          .map(
            (language) =>
              `<span style="padding-inline-end: 6px;">${language},</span>`
          )
          .splice("");

        // console.log(country);
        const cardBody = `
            <img src="${country?.flag}" alt="${country?.name}" />
            <h4>${country?.name}</h4>
            <div>
            <p><span>Capital:</span><span>${country?.capital}</span></p>
            <p><span>Languages:</span> ${languages}</p>
            <p><span>Population:</span><span>${country?.population}</span></p>
            </div>
            `;

        card.innerHTML = cardBody;
        card.style.backgroundColor = "white";
        card.style.height = "250px";
        card.style.width = "200px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "center";
        card.style.padding = "10px";
        card.style.gap = "25px";
        allCountries.append(card);
      });
    });
  });
  countCapital.addEventListener("click", () => {
    compoIncludesCant.reverse().forEach(() => {
      allCountries.innerHTML = "";
      compoIncludesCant?.forEach((country) => {
        const card = document.createElement("div");

        //   card.style.width = "100px";
        const languages = country.languages
          .map(
            (language) =>
              `<span style="padding-inline-end: 6px;">${language},</span>`
          )
          .splice("");

        // console.log(country);
        const cardBody = `
                  <img src="${country?.flag}" alt="${country?.name}" />
                  <h4>${country?.name}</h4>
                  <div>
                  <p><span>Capital:</span><span>${country?.capital}</span></p>
                  <p><span>Languages:</span> ${languages}</p>
                  <p><span>Population:</span><span>${country?.population}</span></p>
                  </div>
                  `;

        card.innerHTML = cardBody;
        card.style.backgroundColor = "white";
        card.style.height = "250px";
        card.style.width = "200px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "center";
        card.style.padding = "10px";
        card.style.gap = "25px";
        allCountries.append(card);
      });
    });
  });
  countPopulation.addEventListener("click", () => {
    incPopulation.reverse().forEach(() => {
      allCountries.innerHTML = "";
      incPopulation.forEach((country) => {
        const card = document.createElement("div");

        //   card.style.width = "100px";
        const languages = country.languages
          .map(
            (language) =>
              `<span style="padding-inline-end: 6px;">${language},</span>`
          )
          .splice("");

        // console.log(country);
        const cardBody = `
                    <img src="${country?.flag}" alt="${country?.name}" />
                    <h4>${country?.name}</h4>
                    <div>
                    <p><span>Capital:</span><span>${country?.capital}</span></p>
                    <p><span>Languages:</span> ${languages}</p>
                    <p><span>Population:</span><span>${country?.population}</span></p>
                    </div>
                    `;

        card.innerHTML = cardBody;
        card.style.backgroundColor = "white";
        card.style.height = "250px";
        card.style.width = "200px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "center";
        card.style.padding = "10px";
        card.style.gap = "25px";
        allCountries.append(card);
      });
    });
  });
});
// searchInput = document.addEventListener("input", (e) => {
//   console.log(allButtons?.value, "name");
//   if (condition) {

//   } else {

//   }
// });

// const flag = document.createElement("li");
// const first = document.createElement("span");

// const socend = document.createElement("div");
// card.innerHTML = countries;
// card.appendChild(allCountries);

// const lolo = countries.forEach((ele)=>{
//     return ele?.name
// })
// console.log(lolo)
// const nameCoun = (input) => {
//   countries
//     .filter((item) => item?.name?.toLowerCase().includes(input.toLowerCase()))
//     .forEach((countries) => {
//     });
// };

// const capitalCoun = () => {
//   allCountries.innerHTML = "";
//   const capitalRevers = countries.map((el) => el.capital).reverse();
//   console.log(capitalRevers, "cap");
//   const card = document.createElement("li");
//   card.innerHTML = capitalRevers;

//   countries.filter((cap) => cap?.capital?.reverse(cap))=>{
//     const card = document.createElement('li')
//   };
// };

// function handlClick(type){
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// }
