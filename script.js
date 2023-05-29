const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    removeActive()
    panel.classList.add("active");
  });
});

const removeActive = function (panel) {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
