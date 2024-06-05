export const typewriterEffect = (textEl, text) => {

  let i = 0;
  let speed = 200; /* The speed/duration of the effect in milliseconds */
  function typeWriter() {
    if (i < text.length) {
      textEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
};