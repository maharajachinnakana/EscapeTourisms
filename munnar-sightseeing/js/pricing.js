/* ==========================================================
   PRICING — quick highlight on hover/focus for touch devices
========================================================== */

(function () {

    var cards = document.querySelectorAll(".pricingCard");

    cards.forEach(function (card) {

        card.addEventListener("touchstart", function () {
            cards.forEach(function (c) { c.classList.remove("isActive"); });
            card.classList.add("isActive");
        }, { passive: true });

    });

})();
