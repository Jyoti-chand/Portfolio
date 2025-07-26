 // Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typing effect in About section
const aboutPara = document.querySelector("#about p");
const text = "Hello! I’m Jyoti Chand, a motivated learner in the world of programming. I have experience with C, C++, HTML, and CSS, and I am currently learning JavaScript and Python to build modern, dynamic applications.";
let idx = 0;

function typeEffect() {
  if (idx < text.length) {
    aboutPara.innerHTML += text.charAt(idx);
    idx++;
    setTimeout(typeEffect, 30);
  }
}

aboutPara.innerHTML = "";
typeEffect();

// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

 