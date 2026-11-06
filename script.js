"use strict";
// При запуске одной записи останавливаем остальные.
document.querySelectorAll("audio").forEach((current) => {
  current.addEventListener("play", () => {
    document.querySelectorAll("audio").forEach((other) => {
      if (other !== current && !other.paused) other.pause();
    });
  });
  current.addEventListener("error", () => {
    console.error("Ошибка загрузки аудио:", current.currentSrc || current.src);
  });
});
