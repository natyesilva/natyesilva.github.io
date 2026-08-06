export function hoverChangeDescription(nameCard, text) {
  const changeDescription = document.querySelector(".changeDescription");
  const card = document.querySelector(nameCard);

  if (!changeDescription || !card) {
    return;
  }

  card.addEventListener("mouseover", () => {
    changeDescription.textContent = text;
  });

  card.addEventListener("mouseout", () => {
    changeDescription.textContent = "*passe o cursor do mouse no card para ler*";
  });
}
