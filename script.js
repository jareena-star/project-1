// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll on CTA button
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            document.getElementById("features").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Mobile nav toggle for smaller screens
    const nav = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    const mobileToggle = document.createElement("div");
    mobileToggle.classList.add("mobile-toggle");
    mobileToggle.innerHTML = "&#9776;"; // Hamburger menu icon

    if (window.innerWidth <= 768) {
        nav.appendChild(mobileToggle);
        navLinks.style.display = "none";

        mobileToggle.addEventListener("click", () => {
            navLinks.style.display = navLinks.style.display === "none" ? "flex" : "none";
            navLinks.style.flexDirection = "column";
        });
    }

    // Adjust layout dynamically on window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "row";
        } else {
            navLinks.style.display = "none";
        }
    });

    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});
