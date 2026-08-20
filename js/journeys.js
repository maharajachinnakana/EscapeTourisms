/* ==========================================================
   THE JOURNEY — SWITCHER
========================================================== */

function initJourneySwitcher() {

    const section =
        document.querySelector(".journeySection");

    if (!section) return;


    const visual =
        section.querySelector(".journeyVisual img");

    const visualLabel =
        section.querySelector(".journeyVisualLabel");

    const number =
        section.querySelector(".journeyFeatureNumber");

    const eyebrow =
        section.querySelector(".journeyFeatureEyebrow");

    const title =
        section.querySelector(".journeyFeatureContent h3");

    const description =
        section.querySelector(".journeyFeatureContent p");

    const link =
        section.querySelector(".journeyLink");

    const buttons =
        section.querySelectorAll(".journeyNavItem");

    const journeyGlass =
        section.querySelector(".journeyFeatureContent");


    if (
        !visual ||
        !visualLabel ||
        !number ||
        !eyebrow ||
        !title ||
        !description ||
        !link ||
        !buttons.length
    ) {
        return;
    }


    /* ======================================================
       JOURNEY DATA
    ====================================================== */

    const journeys = {

        airport: {

            number: "01",

            eyebrow: "ARRIVE",

            title: "Airport<br>Transfers",

            description:
                "Start your Kerala journey smoothly with a comfortable airport pickup or drop, planned around your arrival and departure.",

            image:
                "assets/images/journeys/arrive.webp",

            label:
                "KERALA · AIRPORT",

            linkText:
                "Plan Airport Transfer",

            linkUrl:
                "#booking"

        },


        munnar: {

            number: "02",

            eyebrow: "ASCEND",

            title: "Munnar<br>Journeys",

            description:
                "Follow the mountain roads into Munnar. From peaceful sightseeing routes to sunrise adventures, let the journey be part of the experience.",

            image:
                "assets/images/journeys/ascend.webp",

            label:
                "MUNNAR · KERALA",

            linkText:
                "Explore Munnar",

            linkUrl:
                "/munnar-taxi-service/"

        },


        sightseeing: {

            number: "03",

            eyebrow: "EXPLORE",

            title: "Kerala<br>Sightseeing",

            description:
                "Take the scenic route and discover Kerala at your own pace, from misty hills and quiet lakes to the places worth stopping for.",

            image:
                "assets/images/journeys/explore.webp",

            label:
                "KERALA · SIGHTSEEING",

            linkText:
                "Plan Your Journey",

            linkUrl:
                "#booking"

        },


        outstation: {

            number: "04",

            eyebrow: "BEYOND",

            title: "Beyond<br>Kerala",

            description:
                "Travel beyond the usual routes with comfortable outstation journeys connecting Kerala with Tamil Nadu and nearby destinations.",

            image:
                "assets/images/journeys/beyond.webp",

            label:
                "KERALA → TAMIL NADU",

            linkText:
                "Plan Outstation Trip",

            linkUrl:
                "#booking"

        }

    };


    let currentJourney =
        "munnar";


    /* ======================================================
       GLASS HELPER
    ====================================================== */

    function updateJourneyGlass(image) {

        if (
            !journeyGlass ||
            !window.LiquidGlass
        ) {
            return;
        }


        const glassInstance =
            window.LiquidGlass.get(
                journeyGlass
            );


        if (!glassInstance) {
            return;
        }


        glassInstance.setBackground(
            image
        );

    }


    /* ======================================================
       CHANGE JOURNEY
    ====================================================== */

    function changeJourney(key) {

        const data =
            journeys[key];


        if (!data) {
            return;
        }


        if (key === currentJourney) {
            return;
        }


        currentJourney =
            key;


        /* ------------------------------------------
           UPDATE GLASS BACKGROUND
        ------------------------------------------ */

        updateJourneyGlass(
            data.image
        );


        /* ------------------------------------------
           ACTIVE BUTTON
        ------------------------------------------ */

        buttons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.journey === key
            );

        });


        /* ------------------------------------------
           IMAGE FADE OUT
        ------------------------------------------ */

        visual.style.opacity =
            "0";

        visualLabel.style.opacity =
            "0";


        setTimeout(() => {

            visual.src =
                data.image;

            visual.alt =
                data.label;


            visual.onload = () => {

                visual.style.opacity =
                    "1";

            };


            visual.onerror = () => {

                visual.style.opacity =
                    "1";

                console.warn(
                    "Journey image not found:",
                    data.image
                );

            };


            visualLabel.textContent =
                data.label;

            visualLabel.style.opacity =
                "1";


            /* --------------------------------------
               CONTENT
            -------------------------------------- */

            number.textContent =
                data.number;


            eyebrow.textContent =
                data.eyebrow;


            title.innerHTML =
                data.title;


            description.textContent =
                data.description;


            link.href =
                data.linkUrl;


            /*
             * Restore link text + arrow
             */

            link.innerHTML =
                data.linkText +
                ' <i class="fa-solid fa-arrow-right"></i>';


        }, 220);

    }


    /* ======================================================
       BUTTON EVENTS
    ====================================================== */

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                changeJourney(
                    button.dataset.journey
                );

            }
        );

    });


    /* ======================================================
       INITIAL MUNNAR STATE
    ====================================================== */

    const initialJourney =
        journeys.munnar;


    visual.src =
        initialJourney.image;


    visual.alt =
        initialJourney.label;


    updateJourneyGlass(
        initialJourney.image
    );

}