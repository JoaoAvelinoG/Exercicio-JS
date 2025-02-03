const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector(".btn");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el) => {
  el.addEventListener("click", (event) => {
    const cursoSelecionado = event.target;
    cursoSelecionado.classList.toggle("selecionado");
  });
});

btn.addEventListener("click", () => {
  const selecionados = [...document.querySelectorAll(".selecionado")];
  const naoSelecionados = [
    ...document.querySelectorAll(".curso:not(.selecionado)"),
  ];
  selecionados.map((el) => {
    caixa2.appendChild(el);
  });
  naoSelecionados.map((el) => {
    caixa1.appendChild(el);
  });
});
