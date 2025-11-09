const styles = ["SKINS/dark.css", "SKINS/modern.css", "SKINS/basic.css"];

document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("theme-link");
  const button = document.getElementById("style-btn");

  button.addEventListener("click", () => {
    const current = link.getAttribute("href");
    let nextIndex = (styles.indexOf(current) + 1) % styles.length;
    link.setAttribute("href", styles[nextIndex]);
  });
});
