let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e) {
  console.log("Clicou no button");
  e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", () => {
  btn1.removeEventListener("click", msg);
});

p.addEventListener("click", () => {
  console.log("clicou no paragrafo");
});
