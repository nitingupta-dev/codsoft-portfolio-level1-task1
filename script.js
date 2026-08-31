document.addEventListener("DOMContentLoaded", () => {

  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    if (preloader) preloader.classList.add("loaded");
  });
  setTimeout(() => {
    if (preloader) preloader.classList.add("loaded");
  }, 1200);

  const navbar = document.getElementById("navbar");
  const handleNavbarScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  handleNavbarScroll();
  window.addEventListener("scroll", handleNavbarScroll);

  const hamburger = document.getElementById("hamburger");
  const navLinksContainer = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinksContainer.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const setActiveLink = () => {
    let current = "";
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  };

  window.addEventListener("scroll", setActiveLink);

  const fadeElements = document.querySelectorAll(".fade-in");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((el) => revealObserver.observe(el));

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const submitButton = contactForm.querySelector(".form-submit");
      const formData = new FormData(contactForm);

      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          formStatus.textContent = "Thanks! Your message has been sent successfully.";
          formStatus.style.color = "#56d6d6";
          contactForm.reset();
        } else {
          formStatus.textContent = "Sorry, something went wrong. Please try again.";
          formStatus.style.color = "#f87171";
        }
      } catch (error) {
        formStatus.textContent = "Unable to send the message. Please try again.";
        formStatus.style.color = "#f87171";
      }

      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    });
  }
});
