const title = document.querySelector("#title");
const BASE_COLOR = "rgb(5, 5, 5)";
const OTHER_COLOR = '#08E6FB';
const CLICKED_CLASS = "clicked";
function handleclick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if(hasClass) {
      title.classList.remove(CLICKED_CLASS);
  } else {
      title.classList.add(CLICKED_CLASS);
  }
}
function init() {
    window.addEventListener("click", handleclick);
}
init();
