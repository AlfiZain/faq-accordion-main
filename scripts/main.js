const accordionItems = document.querySelectorAll(".accordion-item");
document.addEventListener("DOMContentLoaded", () => {
  accordionToggle();
});

const accordionToggle = () => {
  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".accordion-icon");

    button.addEventListener("click", () => {
      let isOpen = content.classList.contains("open");

      //   close other accordion before open new one
      accordionItems.forEach((item) => {
        item.querySelector(".accordion-header").setAttribute("aria-expanded", false);
        item.querySelector(".accordion-content").classList.remove("open");
        item.querySelector(".accordion-icon").setAttribute("src", "./assets/images/icon-plus.svg");
      });

      //   accordion toggler logic
      if (!isOpen) {
        button.setAttribute("aria-expanded", true);
        content.classList.add("open");
        icon.setAttribute("src", "./assets/images/icon-minus.svg");
      } else {
        button.setAttribute("aria-expanded", false);
        content.classList.remove("open");
        icon.setAttribute("src", "./assets/images/icon-plus.svg");
      }
    });
  });
};
