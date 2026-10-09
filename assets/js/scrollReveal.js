// Optional native enhancement: content is visible before and without animation.
export function initScrollReveal() {
  if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) {
    return;
  }

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pending = new Set(document.querySelectorAll(
    ".delaySmallReveal, .delayMediumReveal, .delayLargeReveal, .delayExtraBigReveal, .intervalCardReveal"
  ));
  const active = new Map();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting || motion.matches) return;
      observer.unobserve(target);
      pending.delete(target);
      if (target.contains(document.activeElement)) return;

      const animation = target.animate(
        [{ transform: "translateY(8px)" }, { transform: "translateY(0)" }],
        { duration: 220, easing: "ease-out" }
      );
      active.set(target, animation);
      animation.finished.then(
        () => active.delete(target),
        () => active.delete(target)
      );
    });
  }, { threshold: 0.1 });

  function syncMotion() {
    if (motion.matches) {
      observer.disconnect();
      active.forEach((animation) => animation.cancel());
      active.clear();
    } else {
      pending.forEach((element) => observer.observe(element));
    }
  }

  function preserveFocus(event) {
    active.forEach((animation, element) => {
      if (element.contains(event.target)) animation.cancel();
    });
  }

  motion.addEventListener("change", syncMotion);
  document.addEventListener("focusin", preserveFocus);
  syncMotion();

  return () => {
    observer.disconnect();
    active.forEach((animation) => animation.cancel());
    motion.removeEventListener("change", syncMotion);
    document.removeEventListener("focusin", preserveFocus);
  };
}
