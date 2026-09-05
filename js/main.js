/* ==========================================================
   ESCAPE TOURISMS
   MAIN JAVASCRIPT
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const inits = [
        initDesktopMenu,
        initMobileMenu,
        initScrollUI,
        initBackToTop,
        initHeroScroll,
        initFaqAccordion,
        initBookingForm,
    ];

    inits.forEach((fn) => {
        try {
            fn();
        } catch (err) {
            console.error("Escape Tourisms init error in", fn.name, err);
        }
    });

    if (typeof initJourneySwitcher === "function") {
        try {
            initJourneySwitcher();
        } catch (err) {
            console.error("Escape Tourisms init error in initJourneySwitcher", err);
        }
    }

});

/* ==========================================================
   FAQ ACCORDION
========================================================== */

function initFaqAccordion() {

    const items =
        document.querySelectorAll(".faqItem");

    if (!items.length) return;


    items.forEach(item => {

        const button =
            item.querySelector(".faqQuestion");

        if (!button) return;


        button.addEventListener("click", () => {

            const isOpen =
                item.classList.contains("isOpen");


            /* Close all others (single-open accordion) */

            items.forEach(other => {

                other.classList.remove("isOpen");

                other
                    .querySelector(".faqQuestion")
                    .setAttribute("aria-expanded", "false");

            });


            if (!isOpen) {

                item.classList.add("isOpen");

                button.setAttribute("aria-expanded", "true");

            }

        });

    });

}

/* ==========================================================
   CINEMATIC HERO SCROLL
========================================================== */

function initHeroScroll() {

    const hero =
        document.getElementById("hero");

    if (!hero) return;


    const contents = [

        hero.querySelector(".heroContent01"),
        hero.querySelector(".heroContent02"),
        hero.querySelector(".heroContent03"),
        hero.querySelector(".heroContent04")

    ].filter(Boolean);


    const canvas =
        document.getElementById("heroCanvas");

    const loader =
        document.getElementById("heroFrameLoader");


    if (
        contents.length !== 4 ||
        !canvas
    ) {
        return;
    }


    /* ======================================================
       FRAME CONFIG
    ====================================================== */

    const TOTAL_FRAMES = 240;


    const FRAME_PATH = (i) =>
        `assets/images/hero/frames/frame_${String(i).padStart(3, "0")}.jpg`;


    const frameImages = [];

    let loadedCount = 0;


    for (
        let i = 1;
        i <= TOTAL_FRAMES;
        i++
    ) {

        const img = new Image();


        img.src =
            FRAME_PATH(i);


        img.onload =
            img.onerror = () => {

                loadedCount++;


                if (
                    loadedCount === TOTAL_FRAMES &&
                    loader
                ) {

                    loader.classList.add(
                        "isHidden"
                    );

                }

            };


        frameImages.push(img);

    }


    /* ======================================================
       CANVAS
    ====================================================== */

    const ctx =
        canvas.getContext("2d");


    function resizeCanvas() {

        const dpr =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        canvas.width =
            window.innerWidth * dpr;


        canvas.height =
            window.innerHeight * dpr;


        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );


        drawCurrentFrame();

    }


    /* ======================================================
       DRAW FRAME
    ====================================================== */

    function drawFrame(img) {

        if (
            !img.complete ||
            !img.naturalWidth
        ) {
            return;
        }


        const cw =
            window.innerWidth;

        const ch =
            window.innerHeight;


        ctx.clearRect(
            0,
            0,
            cw,
            ch
        );


        const scale =
            Math.max(
                cw / img.naturalWidth,
                ch / img.naturalHeight
            );


        const iw =
            img.naturalWidth * scale;


        const ih =
            img.naturalHeight * scale;


        const ix =
            (cw - iw) / 2;


        const iy =
            (ch - ih) / 2;


        ctx.drawImage(
            img,
            ix,
            iy,
            iw,
            ih
        );

    }


    /* ======================================================
       PROGRESS
    ====================================================== */

    function getProgress() {

        const rect =
            hero.getBoundingClientRect();


        const scrollDistance =
            hero.offsetHeight -
            window.innerHeight;


        if (scrollDistance <= 0) {
            return 0;
        }


        return Math.min(
            1,
            Math.max(
                0,
                -rect.top /
                scrollDistance
            )
        );

    }


    /* ======================================================
       CURRENT FRAME
    ====================================================== */

    function drawCurrentFrame() {

        const progress =
            getProgress();


        const frameIndex =
            Math.min(
                TOTAL_FRAMES - 1,
                Math.floor(
                    progress *
                    TOTAL_FRAMES
                )
            );


        drawFrame(
            frameImages[frameIndex]
        );

    }


    /* ======================================================
       CONTENT STAGES
    ====================================================== */

    const stages = [

        /* ------------------------------------------
           01 — OPENING
        ------------------------------------------ */

        {
            start: 0.00,
            end: 0.28
        },


        /* ------------------------------------------
           02 — PLAN YOUR JOURNEY
        ------------------------------------------ */

        {
            start: 0.22,
            end: 0.52
        },


        /* ------------------------------------------
           03 — GO BEYOND THE ROUTE
        ------------------------------------------ */

        {
            start: 0.48,
            end: 0.78
        },


        /* ------------------------------------------
           04 — CLOSING
        ------------------------------------------ */

        {
            start: 0.74,
            end: 1.00
        }

    ];


    /* ======================================================
       UPDATE HERO
    ====================================================== */

    function updateHero() {

        const progress =
            getProgress();


        /* FRAME */

        drawCurrentFrame();


        /* CONTENT */

        contents.forEach(
            (content, index) => {

                const stage =
                    stages[index];


                if (!stage) return;


                const fadeZone =
                    0.08;


                let opacity = 0;


                /* ======================================
                   CONTENT 01
                   Visible immediately
                ====================================== */

                if (index === 0) {

                    if (
                        progress <
                        stage.end - fadeZone
                    ) {

                        opacity = 1;

                    }

                    else if (
                        progress <=
                        stage.end
                    ) {

                        opacity =
                            1 -
                            (
                                (
                                    progress -
                                    (
                                        stage.end -
                                        fadeZone
                                    )
                                ) /
                                fadeZone
                            );

                    }

                }


                /* ======================================
                   CONTENT 02 + 03
                ====================================== */

                else if (
                    index === 1 ||
                    index === 2
                ) {

                    const fadeInStart =
                        stage.start;


                    const fadeInEnd =
                        stage.start +
                        fadeZone;


                    const fadeOutStart =
                        stage.end -
                        fadeZone;


                    const fadeOutEnd =
                        stage.end;


                    /* FADE IN */

                    if (
                        progress >=
                        fadeInStart &&
                        progress <
                        fadeInEnd
                    ) {

                        opacity =
                            (
                                progress -
                                fadeInStart
                            ) /
                            fadeZone;

                    }


                    /* FULL */

                    else if (
                        progress >=
                        fadeInEnd &&
                        progress <=
                        fadeOutStart
                    ) {

                        opacity = 1;

                    }


                    /* FADE OUT */

                    else if (
                        progress >
                        fadeOutStart &&
                        progress <=
                        fadeOutEnd
                    ) {

                        opacity =
                            1 -
                            (
                                (
                                    progress -
                                    fadeOutStart
                                ) /
                                fadeZone
                            );

                    }

                }


                /* ======================================
                   CONTENT 04
                   Remains until final frame
                ====================================== */

                else if (index === 3) {

                    const fadeInStart =
                        stage.start;


                    const fadeInEnd =
                        stage.start +
                        fadeZone;


                    if (
                        progress >=
                        fadeInStart &&
                        progress <
                        fadeInEnd
                    ) {

                        opacity =
                            (
                                progress -
                                fadeInStart
                            ) /
                            fadeZone;

                    }

                    else if (
                        progress >=
                        fadeInEnd
                    ) {

                        opacity = 1;

                    }

                }


                content.style.opacity =
                    opacity;


                content.style.transform =
                    `translateY(${(1 - opacity) * 35}px)`;

            }
        );

    }


    /* ======================================================
       EVENTS
    ====================================================== */

    window.addEventListener(
        "scroll",
        updateHero,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    /* ======================================================
       INITIAL
    ====================================================== */

    resizeCanvas();

    updateHero();

}

/* ==========================================================
   DESKTOP MENU
========================================================== */

function initDesktopMenu() {

    const menuButton =
        document.getElementById("desktopMenuBtn");

    const desktopMenu =
        document.getElementById("desktopMenu");


    if (!menuButton || !desktopMenu) return;


    menuButton.addEventListener("click", (event) => {

        event.stopPropagation();

        desktopMenu.classList.toggle("active");

    });


    /* Close when clicking outside */

    document.addEventListener("click", (event) => {

        if (
            !desktopMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            desktopMenu.classList.remove("active");

        }

    });


    /* Close after selecting a page */

    desktopMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                desktopMenu.classList.remove("active");

            });

        });

}
/* ==========================================================
   MOBILE MENU
========================================================== */

function initMobileMenu() {

    const toggle =
        document.getElementById("mobileMenuToggle");

    const menu =
        document.getElementById("mobileMenu");


    if (!toggle || !menu) return;


    toggle.addEventListener("click", () => {

        const isOpen =
            toggle.classList.toggle("active");

        menu.classList.toggle("active");

        toggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menu.setAttribute(
            "aria-hidden",
            !isOpen
        );

    });


    /* Close when menu link clicked */

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            toggle.classList.remove("active");

            menu.classList.remove("active");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menu.setAttribute(
                "aria-hidden",
                "true"
            );

        });

    });

}

/* ==========================================================
   SCROLL UI — DIRECTION BASED
========================================================== */

function initScrollUI() {

    let lastScrollY = window.scrollY;
    let scrollTimer;

    const header = document.getElementById("header");
    const floatingButtons =
        document.querySelector(".floatingButtons");

    if (!header && !floatingButtons) return;


    function showUI() {

        document.body.classList.remove("uiHidden");

    }


    function hideUI() {

        /* Never hide while mobile menu is open */

        const mobileMenu =
            document.getElementById("mobileMenu");

        if (
            mobileMenu &&
            mobileMenu.classList.contains("active")
        ) {
            return;
        }

        document.body.classList.add("uiHidden");

    }


    window.addEventListener(
        "scroll",
        () => {

            const currentScrollY = window.scrollY;

            /* Ignore tiny movement */

            if (
                Math.abs(currentScrollY - lastScrollY) < 5
            ) {
                return;
            }


            /* ==========================================
               SCROLL UP
               ========================================== */

            if (currentScrollY < lastScrollY) {

                showUI();



            }


            /* ==========================================
               SCROLL DOWN
               ========================================== */

            else {

                hideUI();

            }


            lastScrollY = currentScrollY;


            /* ==========================================
               STOP SCROLLING FOR 2 SECONDS
               ========================================== */

            clearTimeout(scrollTimer);

            scrollTimer = setTimeout(() => {

                showUI();

            }, 1000);

        },
        {
            passive: true
        }
    );

}


/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop() {

    const button =
        document.getElementById("backToTop");


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}

/* ==========================================================
   BOOKING SYSTEM
========================================================== */

function initBookingForm() {

    const booking =
        document.getElementById("booking");

    const form =
        document.getElementById("bookingForm");

    const closeButton =
        document.getElementById("bookingClose");

    const desktopButton =
        document.getElementById("desktopBookingBtn");

    const mobileButton =
        document.getElementById("mobileBookingBtn");

    const heroButton =
        document.getElementById("heroBookingBtn");

    const submitArea =
        document.querySelector(".bookingSubmitArea");


    if (
        !booking ||
        !form ||
        !closeButton ||
        !desktopButton ||
        !mobileButton ||
        !submitArea
    ) {
        return;
    }


    /* ======================================================
       MOBILE BUTTON ORIGINAL POSITION
    ====================================================== */

    const mobileButtonPlaceholder =
        document.createComment(
            "Mobile Book Now Position"
        );

    mobileButton.parentNode.insertBefore(
        mobileButtonPlaceholder,
        mobileButton
    );


    /* ======================================================
       BOOKING STATE
    ====================================================== */

    let bookingOpen = false;


    /* ======================================================
       CHECK MOBILE
    ====================================================== */

    function isMobile() {

        return window.matchMedia(
            "(max-width: 768px)"
        ).matches;

    }


    /* ======================================================
       PAGE / BOOKING SOURCE
    ====================================================== */

    function getBookingSource() {

        return (
            document.body.dataset.bookingSource ||
            document.title ||
            "Website"
        );

    }


    /* ======================================================
       OPEN BOOKING
    ====================================================== */

    function openBooking() {

        bookingOpen = true;


        booking.classList.add("active");

        booking.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "bookingOpen"
        );


        /* ----------------------------------------------
           MOBILE
           Move actual Book Now button INSIDE form
        ---------------------------------------------- */

        if (isMobile()) {

            submitArea.prepend(
                mobileButton
            );


            const buttonText =
                mobileButton.querySelector(
                    ".bookingBtnText"
                );


            if (buttonText) {

                buttonText.textContent =
                    "Send Enquiry";

            }


            mobileButton.classList.add(
                "mobileBookingSubmit"
            );

        }

    }


    /* ======================================================
       CLOSE BOOKING
    ====================================================== */

    function closeBooking() {

        bookingOpen = false;


        booking.classList.remove("active");

        booking.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "bookingOpen"
        );


        /* ----------------------------------------------
           MOBILE
           Return Book Now button to original position
        ---------------------------------------------- */

        if (
            mobileButton.parentElement ===
            submitArea
        ) {

            mobileButtonPlaceholder.parentNode.insertBefore(
                mobileButton,
                mobileButtonPlaceholder.nextSibling
            );

        }


        const buttonText =
            mobileButton.querySelector(
                ".bookingBtnText"
            );


        if (buttonText) {

            buttonText.textContent =
                "Book Now";

        }


        mobileButton.classList.remove(
            "mobileBookingSubmit"
        );

    }


    /* ======================================================
       DESKTOP BOOK NOW
       NEVER changes text
    ====================================================== */

    desktopButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            openBooking();

        }
    );


    /* ======================================================
       MOBILE BOOK NOW
    ====================================================== */

    mobileButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            if (!bookingOpen) {

                openBooking();

                return;

            }


            /* ------------------------------------------
               When button is INSIDE booking form,
               it becomes Send Enquiry.
            ------------------------------------------ */

            submitBooking();

        }
    );


    /* ======================================================
       CLOSE BUTTON
    ====================================================== */

    closeButton.addEventListener(
        "click",
        () => {

            closeBooking();

        }
    );


    /* ======================================================
       CLICK OUTSIDE CARD
    ====================================================== */

    booking.addEventListener(
        "click",
        (event) => {

            if (
                event.target === booking
            ) {

                closeBooking();

            }

        }
    );


    /* ======================================================
       ESC KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                bookingOpen
            ) {

                closeBooking();

            }

        }
    );


    /* ======================================================
       DESKTOP SEND ENQUIRY
    ====================================================== */

    const desktopSubmit =
        form.querySelector(".bookingSubmit");


    if (desktopSubmit) {

        desktopSubmit.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                submitBooking();

            }
        );

    }

    /* ======================================================
       HERO BOOKING BUTTON
    ====================================================== */

    if (heroButton) {

        heroButton.addEventListener(
            "click",
            () => {

                if (!bookingOpen) {

                    openBooking();

                }

            }
        );

    }
    /* ======================================================
       MOBILE / DESKTOP FORM SUBMIT
    ====================================================== */

    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            submitBooking();

        }
    );


    /* ======================================================
       SEND TO WHATSAPP
    ====================================================== */

    function submitBooking() {

        if (!form.checkValidity()) {

            form.reportValidity();

            return;

        }


        const formData =
            new FormData(form);


        const name =
            formData.get("name") || "";

        const phone =
            formData.get("phone") || "";

        const pickup =
            formData.get("pickup") || "";

        const destination =
            formData.get("destination") || "";

        const date =
            formData.get("date") || "";

        const travellers =
            formData.get("travellers") || "";

        const vehicle =
            formData.get("vehicle") || "";

        const tripType =
            formData.get("tripType") || "";

        const message =
            formData.get("message") || "";


        /* ------------------------------------------
           PAGE SOURCE
        ------------------------------------------ */

        const bookingSource =
            getBookingSource();


        /* ------------------------------------------
           WHATSAPP MESSAGE
        ------------------------------------------ */

        const whatsappMessage =

            `Hello Escape Tourisms,

I would like to plan my Kerala trip.

Booking Source: ${bookingSource}

━━━━━━━━━━━━━━━━
TRAVELLER DETAILS
━━━━━━━━━━━━━━━━

Name: ${name}
Phone: ${phone}

━━━━━━━━━━━━━━━━
TRIP DETAILS
━━━━━━━━━━━━━━━━

Pickup: ${pickup}
Destination: ${destination}
Travel Date: ${date}

Travellers: ${travellers}
Vehicle: ${vehicle}
Trip Type: ${tripType}

━━━━━━━━━━━━━━━━
ESCAPE PLAN
━━━━━━━━━━━━━━━━

${message || "No additional trip details."}

━━━━━━━━━━━━━━━━

Please share the availability and quotation for this trip.

Thank you.`;

        const whatsappURL =
            "https://wa.me/919497665450?text=" +
            encodeURIComponent(
                whatsappMessage
            );


        window.open(
            whatsappURL,
            "_blank"
        );

    }


    /* ======================================================
       RESIZE PROTECTION
       If desktop/mobile changes while popup is open
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (!bookingOpen) return;


            if (
                !isMobile() &&
                mobileButton.parentElement ===
                submitArea
            ) {

                closeBooking();

            }

        }
    );

}



/* ------------------------------------------
   LIQUID GLASS EFFECT ACTIVATION
------------------------------------------ */

if (window.LiquidGlass) {

    window.LiquidGlass.create(
        ".liquidGlass"
    );

}