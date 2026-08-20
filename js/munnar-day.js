/* ==========================================================
   MUNNAR — FROM DAWN TO NIGHT
   LIQUID GLASS TIMELINE
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    initMunnarDay();

});


function initMunnarDay() {

    const section =
        document.querySelector(".munnarDaySection");

    if (!section) return;


    const image =
        section.querySelector(".munnarDayImage");

    const location =
        section.querySelector(".munnarDayLocation");

    const currentTime =
        section.querySelector(".munnarDayCurrentTime");

    const card =
        section.querySelector(".munnarDayGlassCard");

    const cardLabel =
        section.querySelector(".munnarDayCardLabel");

    const counter =
        section.querySelector(".munnarDayCounter");

    const cardTitle =
        section.querySelector(".munnarDayCardTitle");

    const cardText =
        section.querySelector(".munnarDayCardText");

    const cardMeta =
        section.querySelector(".munnarDayCardMeta");

    const points =
        section.querySelectorAll(".munnarDayPoint");


    if (
        !image ||
        !location ||
        !currentTime ||
        !card ||
        !cardLabel ||
        !counter ||
        !cardTitle ||
        !cardText ||
        !cardMeta ||
        !points.length
    ) {
        return;
    }


    /* ======================================================
       MOMENTS
    ====================================================== */

    const moments = {

        "first-light": {

            time: "06:00 AM",

            label: "FIRST LIGHT",

            title:
                "Before the<br>hills awaken.",

            text:
                "Wake before the world and follow the mountain road towards Kolukkumalai as the first light touches the hills.",

            image:
                "assets/images/munnar-day/first-light.webp",

            location:
                "KOLUKKUMALAI · MUNNAR",

            meta:
                "06:00 AM · KOLUKKUMALAI"

        },


        "tea-country": {

            time: "09:30 AM",

            label: "TEA COUNTRY",

            title:
                "Where the<br>mist slows down.",

            text:
                "Drive through endless tea-covered slopes, quiet roads and misty viewpoints that make Munnar feel far away from everything.",

            image:
                "assets/images/munnar-day/tea-country.webp",

            location:
                "TEA COUNTRY · MUNNAR",

            meta:
                "09:30 AM · TEA COUNTRY"

        },


        "go-off-route": {

            time: "01:00 PM",

            label: "GO OFF ROUTE",

            title:
                "Take the road<br>less travelled.",

            text:
                "Leave the usual route behind and discover forest roads, waterfalls, quiet lakes and hidden corners of the hills.",

            image:
                "assets/images/munnar-day/go-off-route.webp",

            location:
                "FOREST · MUNNAR",

            meta:
                "01:00 PM · FOREST"

        },


        "golden-hour": {

            time: "06:30 PM",

            label: "GOLDEN HOUR",

            title:
                "When the hills<br>turn gold.",

            text:
                "As the day slows down, mountain roads become the perfect place to stop, breathe and watch the last light disappear.",

            image:
                "assets/images/munnar-day/golden-hour.webp",

            location:
                "MUNNAR · GOLDEN HOUR",

            meta:
                "06:30 PM · MUNNAR"

        },


        "under-stars": {

            time: "09:00 PM",

            label: "UNDER THE STARS",

            title:
                "End the day<br>under the sky.",

            text:
                "Return to the quiet of the forest, light a campfire and let the mountains become the backdrop to your night.",

            image:
                "assets/images/munnar-day/under-stars.webp",

            location:
                "FOREST CAMP · MUNNAR",

            meta:
                "09:00 PM · FOREST CAMP"

        }

    };


    const keys = [
        "first-light",
        "tea-country",
        "go-off-route",
        "golden-hour",
        "under-stars"
    ];


    let activeIndex = 0;
    let changing = false;


    /* ======================================================
       CHANGE MOMENT
    ====================================================== */

    function changeMoment(index) {

        if (
            index === activeIndex ||
            changing ||
            !moments[keys[index]]
        ) {
            return;
        }


        const data =
            moments[keys[index]];


        changing = true;


        /* ----------------------------------------------
           ACTIVE POINT
        ---------------------------------------------- */

        points.forEach((point, pointIndex) => {

            point.classList.toggle(
                "active",
                pointIndex === index
            );

        });


        /* ----------------------------------------------
           CARD EXIT
        ---------------------------------------------- */

        card.style.opacity = "0";

        card.style.transform =
            "translateY(20px)";


        image.style.opacity = "0";


        setTimeout(() => {

            image.src =
                data.image;

            image.alt =
                data.location;


            location.textContent =
                data.location;

            currentTime.textContent =
                data.time;

            cardLabel.textContent =
                data.label;

            counter.textContent =
                `${String(index + 1).padStart(2, "0")} / 05`;

            cardTitle.innerHTML =
                data.title;

            cardText.textContent =
                data.text;

            cardMeta.innerHTML =
                `<span>${data.time}</span>
                 <span>${data.location}</span>`;


            activeIndex = index;


            /* ------------------------------------------
               IMAGE LOAD
            ------------------------------------------ */

            const showContent = () => {

                image.style.opacity = "1";

                card.style.opacity = "1";

                card.style.transform =
                    "translateY(0)";

                changing = false;

            };


            image.onload =
                showContent;

            image.onerror = () => {

                console.warn(
                    "Munnar image not found:",
                    data.image
                );

                showContent();

            };


        }, 300);

    }


    /* ======================================================
       TIMELINE CLICK
    ====================================================== */

    points.forEach((point, index) => {

        point.addEventListener(
            "click",
            () => {

                changeMoment(index);

            }
        );

    });


    /* ======================================================
       SCROLL CONTROL
    ====================================================== */

    let ticking = false;


    let munnarSectionTop = 0;
    let munnarSectionHeight = 0;


    function calculateMunnarFramePosition() {

        const rect =
            section.getBoundingClientRect();

        munnarSectionTop =
            rect.top + window.scrollY;

        munnarSectionHeight =
            section.offsetHeight;
    }


    calculateMunnarFramePosition();


    window.addEventListener(
        "resize",
        calculateMunnarFramePosition
    );

    function updateFromScroll() {

        ticking = false;


        const viewportHeight =
            window.innerHeight;


        /* ==========================================
           SCROLLABLE DISTANCE WHILE SECTION IS "IN PLAY"
           (section height minus the one viewport that stays
           pinned/sticky on screen at all times — works for
           both the mobile sticky-frame layout and the
           desktop sticky-wrap layout, since both are driven
           purely by how far we've scrolled through the
           section itself)
        ========================================== */

        const scrollableDistance =
            Math.max(
                1,
                munnarSectionHeight - viewportHeight
            );


        const progress =
            Math.min(
                1,
                Math.max(
                    0,
                    (window.scrollY - munnarSectionTop) /
                    scrollableDistance
                )
            );


        /* ==========================================
           5 MOMENTS
        ========================================== */

        const index =
            Math.min(
                points.length - 1,
                Math.floor(
                    progress * points.length
                )
            );


        if (
            index !== activeIndex &&
            !changing
        ) {

            changeMoment(index);

        }

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateFromScroll
                );

                ticking = true;

            }

        },
        {
            passive: true
        }
    );

    /* ======================================================
       INITIAL STATE
    ====================================================== */

    const initial =
        moments[keys[0]];


    image.src =
        initial.image;

    image.alt =
        initial.location;

    location.textContent =
        initial.location;

    currentTime.textContent =
        initial.time;

    cardLabel.textContent =
        initial.label;

    counter.textContent =
        "01 / 05";

    cardTitle.innerHTML =
        initial.title;

    cardText.textContent =
        initial.text;

    cardMeta.innerHTML =
        `<span>${initial.time}</span>
         <span>${initial.location}</span>`;


    points.forEach((point, index) => {

        point.classList.toggle(
            "active",
            index === 0
        );

    });

}