let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", () => {
  console.log("apertou o botao");
});

btn1.addEventListener("mouseup", () => {
  console.log("Soltou o botao");
});

btn2.addEventListener("dblclick", () => {
  console.log("clicou duas vezes");
});

btn2.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("botao direito");
});
