const heartBtn = document.querySelectorAll(".heartBtn");

heartBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("blue-heart");
    if (element.firstElementChild.getAttribute("data-prefix") == "far") {
      element.firstElementChild.setAttribute("data-prefix", "fas");
    } else element.firstElementChild.setAttribute("data-prefix", "far");
  });
});
