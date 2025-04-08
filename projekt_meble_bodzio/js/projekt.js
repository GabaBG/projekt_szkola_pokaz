AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

// zmiana motywu
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

// zmiana icona
function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i");
  if (theme === "light") {
    icon.className = "fas fa-moon";
  } else {
    icon.className = "fas fa-sun";
  }
}

// Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !hamburger.contains(e.target) &&
      !navMenu.contains(e.target)
    ) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });
});

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, select, textarea");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );

  if (allFilled) {
    appendAlert("Formularz został wysłany pomyślnie!", "success");
    form.reset();
  } else {
    appendAlert("Proszę wypełnić wszystkie pola formularza!", "danger");
  }
});

      // Counter 
        const counters = document.querySelectorAll(".counter");
        counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60 FPS

        function updateCount() {
          const count = parseInt(counter.innerText);
          if (count < target) {
            counter.innerText = Math.min(count + Math.ceil(step), target);
            setTimeout(updateCount, 16);
          }
        }

        updateCount();
      });
