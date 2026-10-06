const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((iteam) =>
  iteam.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  }),
);
