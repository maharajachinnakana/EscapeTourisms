/* ==========================================================
   LIQUID GLASS — REUSABLE NATIVE ENGINE
========================================================== */

(function () {

    "use strict";


    class LiquidGlass {

        constructor(element) {

            this.element =
                element;

        }


        /* ======================================================
           INIT
        ====================================================== */

        init() {

            if (!this.element) {
                return;
            }


            this.element.classList.add(
                "liquidGlass"
            );


            this.element.style.setProperty(
                "--liquid-glass-ready",
                "1"
            );

        }


        /* ======================================================
           BACKGROUND UPDATE
           
           IMPORTANT:
           We do NOT copy the image into the glass.
           backdrop-filter automatically samples
           whatever is physically behind the element.
        ====================================================== */

        setBackground(imageSource) {

            /*
             * Keep this method for compatibility
             * with journeys.js.
             *
             * We intentionally DO NOT create
             * another image here.
             */

            if (!this.element) {
                return;
            }


            this.element.dataset.glassBackground =
                imageSource || "";

        }


        /* ======================================================
           REFRESH
        ====================================================== */

        refresh() {

            if (!this.element) {
                return;
            }


            /*
             * Force browser to recalculate
             * the backdrop surface.
             */

            void this.element.offsetWidth;

        }


        /* ======================================================
           DESTROY
        ====================================================== */

        destroy() {

            if (!this.element) {
                return;
            }


            this.element.classList.remove(
                "liquidGlass"
            );


            delete this.element.dataset.glassBackground;

        }

    }


    /* ==========================================================
       GLOBAL API
    ========================================================== */

    window.LiquidGlass = {

        instances: [],


        /* ======================================================
           CREATE
        ====================================================== */

        create: function (selector) {

            const elements =
                document.querySelectorAll(
                    selector
                );


            elements.forEach(
                element => {

                    /*
                     * Prevent duplicate instances
                     */

                    const existing =
                        this.get(element);


                    if (existing) {
                        return;
                    }


                    const instance =
                        new LiquidGlass(
                            element
                        );


                    instance.init();


                    this.instances.push(
                        instance
                    );

                }
            );

        },


        /* ======================================================
           GET
        ====================================================== */

        get: function (element) {

            return this.instances.find(
                instance =>
                    instance.element ===
                    element
            ) || null;

        },


        /* ======================================================
           REFRESH ALL
        ====================================================== */

        refresh: function () {

            this.instances.forEach(
                instance => {

                    instance.refresh();

                }
            );

        },


        /* ======================================================
           DESTROY
        ====================================================== */

        destroy: function (element) {

            const instance =
                this.get(element);


            if (!instance) {
                return;
            }


            instance.destroy();


            this.instances =
                this.instances.filter(
                    item =>
                        item !== instance
                );

        }

    };


})();