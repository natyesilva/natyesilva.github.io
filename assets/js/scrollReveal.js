export function initScrollReveal() {
  if (typeof ScrollReveal === "undefined") {
    return;
  }

  const sr = ScrollReveal({
    origin: "top",
    distance: "28px",
    duration: 900,
    easing: "ease",
    reset: false,
  });

  sr.reveal(".delaySmallReveal", { delay: 200 });
  sr.reveal(".delayMediumReveal", { delay: 300 });
  sr.reveal(".delayLargeReveal", { delay: 400 });
  sr.reveal(".delayExtraBigReveal", { delay: 600 });
  sr.reveal(".intervalCardReveal", { interval: 400 });
}
