/* ==========================================================
   LAZY VIDEO - plays card videos only while they are on screen.
   Use: <video muted loop playsinline preload="none" data-lazy-video>
   Saves mobile data and speeds up the first load.
========================================================== */
(function () {
    "use strict";
    var vids = document.querySelectorAll("video[data-lazy-video]");
    if (!vids.length) return;
    var conn = navigator.connection || {};
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || conn.saveData || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            var v = en.target;
            if (en.isIntersecting) {
                var p = v.play();
                if (p && p.catch) p.catch(function () {});
            } else {
                v.pause();
            }
        });
    }, { rootMargin: "120px 0px", threshold: 0.15 });

    vids.forEach(function (v) { v.muted = true; io.observe(v); });
})();
