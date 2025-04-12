import { articles } from "./articles.js";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("articles-container");

  // Loop through articles array and create the article elements
  articles.forEach((article) => {
    // Get views from localStorage or initialize to 0
    const views = localStorage.getItem(article.counterId) || 0;

    // Create article element
    const articleEl = document.createElement("article");
    articleEl.className = "articles";
    articleEl.setAttribute("data-id", article.id);

    // Set article content
    articleEl.innerHTML = `
    <a href=${article.link}>
        <h3 class="article-heading">${article.title}</h3>
       
        <div class="bio-date"> ${
          article.image
            ? `<img src="${article.image}" alt="${article.title}" width="30" height="30"/>`
            : ""
        }
         <p><strong>Date:</strong> ${article.date}</p>
        </div>
        
        <p>${article.description}</p>
       
        <div class="views">Views: <span class="click-count">${views}</span></div><br>
        <a href="${article.link}" target="_blank">Tag: <span class="tag-col">${
      article.footer
    }</span></a>
         </a>
      `;

    // Track views when article is clicked
    articleEl.addEventListener("click", function () {
      let count = parseInt(localStorage.getItem(article.counterId)) || 0;
      count++;
      localStorage.setItem(article.counterId, count);
      articleEl.querySelector(".click-count").textContent = count;
    });

    // Append the article to the container
    container.appendChild(articleEl);
  });
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
