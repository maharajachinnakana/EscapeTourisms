/* ==========================================================
   TRANSFER CARDS — reveal on scroll
========================================================== */

(function () {

    var cards = document.querySelectorAll(".transferCard");
    if (!cards.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });

    }, { threshold: 0.2 });

    cards.forEach(function (card, i) {
        card.style.opacity = "0";
        card.style.transform = "translateY(14px)";
        card.style.transition = "opacity .5s ease " + (i * 0.05) + "s, transform .5s ease " + (i * 0.05) + "s";
        observer.observe(card);
    });

})();
