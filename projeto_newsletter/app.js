const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");

// preenchendo ano atual
ano.innerHTML = new Date().getFullYear();

// alternando tema claro/escuro
btn.addEventListener("click", () => {
  const escuro = root.getAttribute("data-tema") === "escuro";
  if (escuro) {
    root.removeAttribute("data-tema");
  } else {
    root.setAttribute("data-tema", "escuro");
  }
});
