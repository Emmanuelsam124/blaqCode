function calculateReadingTime(text, wpm = 200) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  return minutes;
}

const articleText = document.querySelector(".article-main").innerText;
const readTime = calculateReadingTime(articleText);
const readTimeEl = document.getElementById("read-time");
readTimeEl.textContent = `${readTime} min read`;
