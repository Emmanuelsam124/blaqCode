import { articles } from "/script/articles.js";

document.addEventListener("DOMContentLoaded", () => {
  // Get current page URL (filename only)
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf("/") + 1);

  // Find matching article
  const article = articles.find((a) => a.link.endsWith(page));

  if (article) {
    // Get views from localStorage
    const count = localStorage.getItem(article.counterId) || 0;

    // Display in the element
    const viewDiv = document.getElementById("view-count");
    if (viewDiv) {
      viewDiv.textContent = `${count} views`;
    }
  }
});

// PAGE THEME SCRIPT START

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("sun-theme");
  const body = document.getElementById("body-theme");
  const button = document.getElementById("btn");

  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  if (isDark) {
    body.classList.add("body");
    if (button) {
      button.style.backgroundColor = "black";
      button.style.color = "white";
    }
    themeToggle.innerHTML = "🌚";
  } else {
    body.classList.remove("body");
    if (button) {
      button.style.backgroundColor = "black";
      button.style.color = "white";
    }
    themeToggle.innerHTML = "☀";
  }

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("body");
    const isDark = body.classList.contains("body");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    themeToggle.innerHTML = isDark ? "🌚" : "☀";

    if (button) {
      button.style.backgroundColor = isDark ? "white" : "black";
      button.style.color = isDark ? "black" : "white";
    }
  });
});

// PAGE THEME SCRIPT END

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
});

// DATE SCRIPT
const newDate = new Date();
const getYear = newDate.getFullYear();
const lastModifiedDate = document.lastModified;

let footerSpanEl = document.getElementById("currentyear");
footerSpanEl.innerHTML = getYear;

let lastModifiedEl = document.getElementById("lastModified");
lastModifiedEl.innerHTML = lastModifiedDate;

console.log(lastModifiedDate);
