const articles = [
  {
    id: "first-article",
    title: "My journey as a web developer",
    date: "August 13, 2021",
    image: "images/emmanuel-sam-blaqcode.webp",
    author: "Emmanuel A Samuel",
    description:
      "I was introduced to programming the same year I returned from my full time mission, by Ojo Rufus Olajide, who was just starting off himself. Programming quickly became my favorite thing from then on.",
    link: "blog/my-web-developer-journey.html",
    footer: "Notes",
    counterId: "result1",
    onClick: "clickCounter1()",
  },
  {
    id: "second-article",
    title: "Javascript: My favorite programming language",
    date: "June 03, 2021",
    image: "images/emmanuel-sam-blaqcode.webp",
    author: "Emmanuel A Samuel",
    description:
      "To be honest, I only started off my programming career with Python. I fell in love with it, but then, JavaScript took me away from my first love. True, JavaScript has its own perks and worries.",
    link: "blog/javascript-my-favorite-language.html",
    footer: "Learn Js",
    counterId: "result2",
    onClick: "clickCounter2()",
  },
  {
    id: "third-article",
    title: "An introduction to web development",
    date: "January 21, 2021",
    image: "images/emmanuel-sam-blaqcode.webp",
    author: "Emmanuel A Samuel",
    description:
      "The term web development is all over the internet. It is basically all about the development of websites and web apps, using markup language like HTML, a cascading stylesheet called CSS, and a programming language called JavaScript.",
    link: "blog/introduction-to-web-development.html",
    footer: "Javascript",
    counterId: "result3",
    onClick: "clickCounter3()",
  },
];

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
       
        <div class="bio-date">  ${
          article.image
            ? `<img src="${article.image}" alt="${article.title}" width="30" height="30"/>`
            : ""
        }
         <p><strong></strong> ${article.author}</p>
        </div>
        
        <p>${article.description}</p>
       
        <div class="views">Views: <span class="click-count">${views}</span></div><br>
        <a href="${article.link}" target="_blank"><span class="tag-col">${
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
