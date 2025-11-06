// window.addEventListener("load", () => {
//   alert("termos de uso");
// });

window.addEventListener("beforeunload", (e) => {
  e.returnValue = null;
});
