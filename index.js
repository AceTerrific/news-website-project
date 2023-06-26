const heartBtn = document.querySelectorAll(".heartBtn");
const closeBtn = document.querySelectorAll(".close-button");
const readBtn = document.querySelectorAll(".read-icon");

heartBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("blue");
    if (element.firstElementChild.getAttribute("data-prefix") == "far") {
      element.firstElementChild.setAttribute("data-prefix", "fas");
    } else element.firstElementChild.setAttribute("data-prefix", "far");
  });
});

closeBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.closest(".box").remove();
  });
});

readBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("blue");
    console.log(element.firstElementChild.getAttribute("class"));

    if (element.firstElementChild.getAttribute("data-prefix") == "far") {
      element.firstElementChild.setAttribute("data-prefix", "fas");
      element.firstElementChild.setAttribute("data-icon", "circle-check");
    } else {
      element.firstElementChild.setAttribute("data-prefix", "far");
      element.firstElementChild.setAttribute("data-icon", "circle");
    }
  });
});
