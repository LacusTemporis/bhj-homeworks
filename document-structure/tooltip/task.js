const hasTooltip = document.querySelectorAll(".has-tooltip");
hasTooltip.forEach(element => {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const position = element.getBoundingClientRect();
    tooltip.textContent = element.title;
    element.insertAdjacentElement("beforebegin", tooltip);
    tooltip.classList.toggle("tooltip_active");
    tooltip.style.top = position.bottom + 'px';
    tooltip.style.left = position.left + 'px';
  });
});