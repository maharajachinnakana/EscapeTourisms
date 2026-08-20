/* ==========================================================
   MAIN SERVICES — VEHICLE MOTION
   TAXI + JEEP : BOTTOM → TOP
========================================================== */

(function () {

    "use strict";


    function initServiceVehicleMotion() {

        const scenes =
            document.querySelectorAll(
                '.serviceScene[data-motion="vehicle"]'
            );


        if (!scenes.length) {
            return;
        }


        let ticking = false;


        function updateVehicles() {

            scenes.forEach((scene) => {

                const visual =
                    scene.querySelector(
                        ".serviceVisual"
                    );


                if (!visual) {
                    return;
                }


                const rect =
                    scene.getBoundingClientRect();


                const viewportHeight =
                    window.innerHeight;


                const scrollDistance =
                    scene.offsetHeight -
                    viewportHeight;


                if (scrollDistance <= 0) {
                    return;
                }


                /* ==========================================
                   SCROLL PROGRESS

                   0 = scene starts
                   1 = scene ends
                ========================================== */

                let progress =
                    -rect.top /
                    scrollDistance;


                progress =
                    Math.max(
                        0,
                        Math.min(
                            1,
                            progress
                        )
                    );


                /* ==========================================
                   SMOOTH MOTION
                ========================================== */

                const eased =
                    progress *
                    progress *
                    (
                        3 -
                        2 *
                        progress
                    );


                /* ==========================================
                   BOTTOM → TOP

                   Starts below viewport
                   Ends above viewport
                ========================================== */

                const startY = 115;

                const endY = -125;


                const moveY =
                    startY +
                    (
                        endY -
                        startY
                    ) *
                    eased;


                visual.style.transform =
                    `
                    translate3d(
                        -50%,
                        ${moveY}vh,
                        0
                    )
                    `;

            });

        }


        /* ==============================================
           REQUEST ANIMATION FRAME
        ============================================== */

        function requestUpdate() {

            if (ticking) {
                return;
            }


            ticking = true;


            requestAnimationFrame(() => {

                updateVehicles();

                ticking = false;

            });

        }


        /* ==============================================
           EVENTS
        ============================================== */

        window.addEventListener(
            "scroll",
            requestUpdate,
            {
                passive: true
            }
        );


        window.addEventListener(
            "resize",
            requestUpdate
        );


        /* ==============================================
           INITIAL UPDATE
        ============================================== */

        requestUpdate();

    }


    /* ==============================================
       INITIALIZE
    ============================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initServiceVehicleMotion,
            {
                once: true
            }
        );

    }
    else {

        initServiceVehicleMotion();

    }

})();