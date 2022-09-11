function resize(obj) {
  obj.style.height = "1px";
  obj.style.height = 0 + obj.scrollHeight + "px";
}

const downloadButton = document.querySelector(".download-button");
const captureModal = document.querySelector(".capture-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const captureExport = function () {
  console.log("실행");
  html2canvas(document.querySelector("#text-section"), {
    logging: true,
    letterRendering: 1,
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    captureModal.appendChild(canvas).classList.add("canvas");
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
