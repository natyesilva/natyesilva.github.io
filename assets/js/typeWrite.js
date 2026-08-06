export function typeWrite(elemento) {
  if (!elemento) {
    return;
  }

  const textoArray = elemento.textContent.trim().split("");
  elemento.textContent = "";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.textContent += letra;
    }, 8 * i);
  });
}
