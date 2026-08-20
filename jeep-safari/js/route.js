/* ==========================================================
   ROUTE ANCHORS — smooth scroll + brief highlight
   Handles deep links like /jeep-safari/#kolukkumalai coming
   from the homepage routes tab, footer, or nav.
========================================================== */

(function () {

    function highlightTarget() {

        var hash = window.location.hash;
        if (!hash) return;

        var target = document.querySelector(hash);
        if (!target) return;

        target.scrollIntoView({ behavior: "smooth", block: "start" });

        target.style.transition = "box-shadow .6s ease";
        target.style.boxShadow = "0 0 0 3px rgba(15, 118, 110, .35)";

        setTimeout(function () {
            target.style.boxShadow = "none";
        }, 1600);

    }

    window.addEventListener("load", highlightTarget);
    window.addEventListener("hashchange", highlightTarget);

})();
