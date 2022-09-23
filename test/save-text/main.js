const textSection = document.querySelector(".text-section");
const textInput = document.querySelector(".text-input");
const textPlaceholder = document.querySelector(".text-placeholder");
const downloadButton = document.querySelector(".download-button");
const captureModal = document.querySelector(".capture-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const resize = (e) => {
  if (textInput) {
    textInput.style.height = "auto";
    let height = textInput.scrollHeight;
    textInput.style.height = `${height}px`;
  }

  if (textInput.childNodes.length != 0) {
    textPlaceholder.classList.add("hidden");
  } else {
    textPlaceholder.classList.remove("hidden");
  }
};

const captureExport = function () {
  console.log("실행");
  html2canvas(document.querySelector("#text-section"), {
    logging: true,
    letterRendering: 1,
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    captureModal.appendChild(canvas).classList.add("canvas");
    let el = document.createElement("a");
    el.href = canvas.toDataURL("image/jpeg");
    el.download = "letter.jpg";
    el.click();
  });

  modal.classList.remove("hidden");
};

const removeCapture = function () {
  captureModal.removeChild(captureModal.firstElementChild);

  modal.classList.add("hidden");
};

downloadButton.addEventListener("click", captureExport);
overlay.addEventListener("click", removeCapture);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    removeCapture();
  }
});
