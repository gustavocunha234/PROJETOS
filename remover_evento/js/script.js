let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg() {
  console.log("Clicou aqui");
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", () => {
  btn1.removeEventListener("click", msg);
});
