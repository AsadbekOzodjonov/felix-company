const barOuter = document.querySelector(".bar-outer");
const options = document.querySelectorAll(".bar-grey .option");
const btnClick = document.querySelector(".btnClick");
const btnClickOne = document.querySelector(".btnClickOne");
const btnClickTwo = document.querySelector(".btnClickTwo");
const btnClickThree = document.querySelector(".btnClickThree");
const btnClickFour = document.querySelector(".btnClickFour");
const btnClickFive = document.querySelector(".btnClickFive");
const ServicesAdd = document.querySelector(".ServicesAdd");
const ServicesAddOne = document.querySelector(".ServicesAddOne");
const ServicesAddTwo = document.querySelector(".ServicesAddTwo");
const ServicesAddThree = document.querySelector(".ServicesAddThree");
const ServicesAddFour = document.querySelector(".ServicesAddFour");
const ServicesAddFive = document.querySelector(".ServicesAddFive");
const Software = document.querySelector(".Software");
const Design = document.querySelector(".Design");
const documentation = document.querySelector(".documentation");
const Products = document.querySelector(".Products");
const Business = document.querySelector(".Business");
const SEO = document.querySelector(".SEO");
const ServicesMediaPlayer = document.querySelector("ServicesMediaPlayer");
let current = 1;
options.forEach((option, i) => (option.index = i + 1));
options.forEach((option) =>
  option.addEventListener("click", function () {
    barOuter.className = "bar-outer";
    barOuter.classList.add(`pos${option.index}`);
    if (option.index > current) {
      barOuter.classList.add("right");
    } else if (option.index < current) {
      barOuter.classList.add("left");
    }
    current = option.index;
  })
);

btnClick.addEventListener("click", function (e) {
  e.preventDefault();
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.textContent = "Software Engineering";
  h1.className = "btnClickH1";
  p.className = "btnclickP";
  div.className = "btnClickHandel";
  p.textContent =
    "Liberal arts curriculum. Graduate-level research. Hands-on opportunities. The highest standards. These are the elements that help Hope students from every discipline succeed";
  div.append(h1, p);
  ServicesAdd.appendChild(div);
  Software.style.display = "none";
});

btnClickOne.addEventListener("click", function (e) {
  e.preventDefault();
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.textContent = "Design";
  h1.className = "btnClickH1W";
  p.className = "btnclickPW";
  div.className = "btnClickHandelW";
  p.textContent =
    "Liberal arts curriculum. Graduate-level research. Hands-on opportunities. The highest standards. These are the elements that help Hope students from every discipline succeed";
  div.append(h1, p);
  ServicesAddOne.appendChild(div);
  Design.style.display = "none";
});

btnClickTwo.addEventListener("click", function (e) {
  e.preventDefault();
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.textContent = "IT-documentation";
  h1.className = "btnClickH1T";
  p.className = "btnclickPT";
  div.className = "btnClickHandelT";
  p.textContent =
    "Liberal arts curriculum. Graduate-level research. Hands-on opportunities. The highest standards. These are the elements that help Hope students from every discipline succeed";
  div.append(h1, p);
  ServicesAddTwo.appendChild(div);
  documentation.style.display = "none";
});

btnClickThree.addEventListener("click", function (e) {
  e.preventDefault();
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.textContent = "Products";
  h1.className = "btnClickH1H";
  p.className = "btnclickPH";
  div.className = "btnClickHandelH";
  p.textContent =
    "Liberal arts curriculum. Graduate-level research. Hands-on opportunities. The highest standards. These are the elements that help Hope students from every discipline succeed";
  div.append(h1, p);
  ServicesAddThree.appendChild(div);
  Products.style.display = "none";
});

btnClickFour.addEventListener("click", function (e) {
  e.preventDefault();
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.textContent = "Business";
  h1.className = "btnClickH1F";
  p.className = "btnclickPF";
  div.className = "btnClickHandelF";
  p.textContent =
    "Liberal arts curriculum. Graduate-level research. Hands-on opportunities. The highest standards. These are the elements that help Hope students from every discipline succeed";
  div.append(h1, p);
  ServicesAddFour.appendChild(div);
  Business.style.display = "none";
});

btnClickFive.addEventListener("click", function (e) {
  e.preventDefault();
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.textContent = "Search engine optimization (SEO)";
  h1.className = "btnClickH1E";
  p.className = "btnclickPE";
  div.className = "btnClickHandelE";
  p.textContent =
    "Liberal arts curriculum. Graduate-level research. Hands-on opportunities. The highest standards. These are the elements that help Hope students from every discipline succeed";
  div.append(h1, p);
  ServicesAddFive.appendChild(div);
  SEO.style.display = "none";
});
ServicesMediaPlayer.addEventListener("click", function (e) {
  e.preventDefault();
  alert("sorry for this picture");
});





