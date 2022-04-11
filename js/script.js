// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const options = {
  // In the viewport
  root: null,
  // threshold : is how much of the element is reached [0:100%(1)]
  threshold: 0,
  // to make it start before the threshold by 80px(the height of the navigation bar)
  rootMargin: "-80px",
};

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  console.log(ent);

  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
}, options);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
