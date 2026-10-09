// Kept for existing callers; the hero does not load this optional effect.
export function typeWrite(elemento) {
  if (!elemento) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motion.matches) return;

  const original = elemento.textContent;
  const characters = Array.from(original);
  let index = 0;
  let timer;

  function finish() {
    clearTimeout(timer);
    elemento.textContent = original;
    motion.removeEventListener("change", onMotionChange);
  }

  function onMotionChange() {
    if (motion.matches) finish();
  }

  function nextCharacter() {
    if (motion.matches || index === characters.length) {
      finish();
      return;
    }
    elemento.textContent += characters[index++];
    timer = setTimeout(nextCharacter, 8);
  }

  motion.addEventListener("change", onMotionChange);
  elemento.textContent = "";
  nextCharacter();
  return finish;
}
