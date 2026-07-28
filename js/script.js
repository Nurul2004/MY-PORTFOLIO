// =====================================
// HASAN PORTFOLIO - MAIN JAVASCRIPT
// =====================================


// -------------------------------------
// 1. MOBILE HAMBURGER MENU
// -------------------------------------

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        // Menu open/close করবে
        navLinks.classList.toggle("show");

        // Menu icon পরিবর্তন করবে
        const icon = menuButton.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


// -------------------------------------
// 2. MENU LINK-এ CLICK করলে
//    MOBILE MENU AUTOMATIC CLOSE হবে
// -------------------------------------

const allNavLinks = document.querySelectorAll(".nav-links a");

allNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {

            navLinks.classList.remove("show");

        }

        if (menuButton) {

            const icon = menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


// -------------------------------------
// 3. DARK / LIGHT MODE
// -------------------------------------

const themeButton = document.getElementById("theme-btn");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        const themeIcon =
            themeButton.querySelector("i");

        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {

            themeIcon.classList.remove(
                "fa-moon"
            );

            themeIcon.classList.add(
                "fa-sun"
            );

        } else {

            themeIcon.classList.remove(
                "fa-sun"
            );

            themeIcon.classList.add(
                "fa-moon"
            );

        }

    });

}


// -------------------------------------
// 4. TYPING ANIMATION
// -------------------------------------

const typingText =
    document.getElementById("typing-text");

const typingWords = [

    "CSE Student",

    "CCNA Learner",

    "Networking Enthusiast",

    "Python Learner",

    "Cybersecurity Enthusiast"

];

let wordIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeEffect() {

    if (!typingText) {

        return;

    }

    const currentWord =
        typingWords[wordIndex];


    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentWord.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            wordIndex =
                (wordIndex + 1)
                %
                typingWords.length;

        }

    }


    const typingSpeed =
        isDeleting
            ? 50
            : 100;


    setTimeout(
        typeEffect,
        typingSpeed
    );

}


typeEffect();


// -------------------------------------
// 5. FOOTER CURRENT YEAR
// -------------------------------------

const currentYear =
    document.getElementById(
        "current-year"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


// -------------------------------------
// 6. PAGE LOAD MESSAGE
// -------------------------------------

console.log(
    "Hasan Portfolio Website Loaded Successfully!"
);


// =====================================
// ABOUT PAGE SCROLL ANIMATION
// =====================================

const aboutElements = document.querySelectorAll(
    ".about-content, .about-image, .goal-card"
);


const aboutObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "show-animation"
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);


aboutElements.forEach(function (element) {

    aboutObserver.observe(element);

});

// =========================================
// SKILLS PAGE ANIMATION
// =========================================


// Skills Page-এর Cards Select করা

const skillCards = document.querySelectorAll(
    ".skill-category"
);


// Tools-এর Cards Select করা

const toolCards = document.querySelectorAll(
    ".tool-card"
);


// Learning Section Select করা

const learningContent = document.querySelector(
    ".learning-content"
);


// সব Element একসাথে রাখা

const skillElements = [

    ...skillCards,

    ...toolCards,

    learningContent

].filter(

    function (element) {

        return element !== null;

    }

);


// Screen-এ Element আসছে কি না
// সেটা Detect করার জন্য Observer

const skillsObserver = new IntersectionObserver(

    function (entries) {


        entries.forEach(

            function (entry) {


                if (

                    entry.isIntersecting

                ) {


                    // Animation Class Add

                    entry.target.classList.add(

                        "skill-show"

                    );


                    // একই Element বারবার
                    // Observe করার দরকার নেই

                    skillsObserver.unobserve(

                        entry.target

                    );

                }


            }

        );


    },


    {

        threshold:
            0.15

    }

);


// সব Skill Element Observe করা

skillElements.forEach(

    function (element) {

        skillsObserver.observe(

            element

        );

    }

);




// =========================================
// SKILL PROGRESS BAR ANIMATION
// =========================================


// সব Progress Bar Select করা

const progressBars = document.querySelectorAll(

    ".skill-progress"

);


// Progress Bar-এর জন্য Observer

const progressObserver = new IntersectionObserver(

    function (entries) {


        entries.forEach(

            function (entry) {


                if (

                    entry.isIntersecting

                ) {


                    // CSS-এর --skill-width
                    // Value পড়া

                    const progressWidth =

                        getComputedStyle(

                            entry.target

                        )

                        .getPropertyValue(

                            "--skill-width"

                        );


                    // Progress Bar Animate করা

                    entry.target.style.width =

                        progressWidth;


                    // একবার Animation হলে
                    // আবার Observe করবে না

                    progressObserver.unobserve(

                        entry.target

                    );

                }


            }

        );


    },


    {

        threshold:
            0.35

    }

);


// সব Progress Bar Observe করা

progressBars.forEach(

    function (progressBar) {

        progressObserver.observe(

            progressBar

        );

    }

);


