document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "ISUFST San Enrique Campus Directory loaded successfully."
    );


    /* =========================
       CARD CLICK EFFECT
    ========================== */

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            cards.forEach(function (otherCard) {

                if (otherCard !== card) {
                    otherCard.classList.remove("selected");
                }

            });

            card.classList.toggle("selected");

        });

    });


    /* =========================
       NAVIGATION ACTIVE EFFECT
    ========================== */

    const navLinks =
        document.querySelectorAll(".bottom-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =========================
       GOOGLE DRIVE BUTTON
    ========================== */

    const driveButtons =
        document.querySelectorAll(".drive-btn");

    driveButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "Opening ACKWEE2026 photo documentation..."
            );

        });

    });


    /* =========================
       WELCOME ANIMATION
    ========================== */

    const welcome =
        document.querySelector(".welcome-content");

    if (welcome) {

        welcome.style.opacity = "0";

        welcome.style.transform =
            "translateY(20px)";

        setTimeout(function () {

            welcome.style.transition =
                "all 0.8s ease";

            welcome.style.opacity = "1";

            welcome.style.transform =
                "translateY(0)";

        }, 150);

    }

});