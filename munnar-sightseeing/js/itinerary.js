/* ==========================================================
   ITINERARY — reveal each stop as it scrolls into view
========================================================== */

(function () {

    var items = document.querySelectorAll(".itineraryItem");
    if (!items.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateX(0)";
                observer.unobserve(entry.target);
            }
        });

    }, { threshold: 0.3 });

    items.forEach(function (item) {
        item.style.opacity = "0";
        item.style.transform = "translateX(-12px)";
        item.style.transition = "opacity .5s ease, transform .5s ease";
        observer.observe(item);
    });

})();
