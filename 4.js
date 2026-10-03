// ============================================
// MOBILE MENU
// ============================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });


// ============================================
// CONTACT FORM
// ============================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        formMessage.textContent =
            "Thank you, " +
            name +
            "! Your message has been received.";


        contactForm.reset();

    }
);


// ============================================
// SCROLL REVEAL
// ============================================

const sections =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .timeline-item"
    );


sections.forEach(function (element) {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.1
        }
    );


sections.forEach(function (element) {

    observer.observe(element);

});


// ============================================
// ACTIVE NAVIGATION
// ============================================

const allSections =
    document.querySelectorAll("section");

const allNavLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    allSections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    allNavLinks.forEach(function (link) {

        link.style.color = "white";


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color =
                "#55a7ff";

        }

    });

});