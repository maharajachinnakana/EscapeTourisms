/* ==========================================================
   ESCAPE TOURISMS — TAXI SERVICE PAGES (tabs + reveal)
   Loaded AFTER main.js; never touches nav, booking or floating
   buttons.
========================================================== */
(function () {
    "use strict";

    /* ---------- tabs ---------- */
    document.querySelectorAll("[data-ts-tabs]").forEach(function (group) {
        var tabs = Array.prototype.slice.call(group.querySelectorAll(".tsTab"));
        var panels = Array.prototype.slice.call(group.querySelectorAll(".tsPanel"));
        if (!tabs.length) return;

        function select(index, focus) {
            tabs.forEach(function (tab, i) {
                var on = i === index;
                tab.setAttribute("aria-selected", on ? "true" : "false");
                tab.tabIndex = on ? 0 : -1;
                if (on && focus) tab.focus();
            });
            panels.forEach(function (panel, i) {
                panel.hidden = i !== index;
            });
        }

        tabs.forEach(function (tab, i) {
            tab.addEventListener("click", function () { select(i, false); });
            tab.addEventListener("keydown", function (e) {
                if (e.key === "ArrowRight") { e.preventDefault(); select((i + 1) % tabs.length, true); }
                if (e.key === "ArrowLeft") { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
            });
        });

        select(0, false);
    });

    /* ---------- reveal on scroll ---------- */
    var items = document.querySelectorAll(".tsReveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach(function (el) { el.classList.add("isIn"); });
        return;
    }

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("isIn");
                io.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
})();
