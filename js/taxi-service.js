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

    /* ---------- hero video (shared logic for every page) ---------- */
    document.querySelectorAll(".tsHeroVideo").forEach(function (v) {
        var conn = navigator.connection || {};
        var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce || conn.saveData) { v.remove(); return; }
        v.muted = true;
        var src = v.querySelector("source");
        if (src) src.addEventListener("error", function () { v.remove(); });
        v.addEventListener("playing", function () { v.classList.add("isReady"); });
        var p = v.play && v.play();
        if (p && p.catch) p.catch(function () {});
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) v.pause(); else if (v.parentNode) { var q = v.play(); if (q && q.catch) q.catch(function () {}); }
        });
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

/* ==========================================================
   IMAGE / VIDEO SLOTS
   While a photo or hero video has not been uploaded yet, the
   page shows a clean WHITE BLANK box with the exact file path
   to upload. As soon as the file exists the real photo shows
   and the blank disappears automatically.
   To hide all blanks (go-live look) set SHOW_SLOTS = false.
========================================================== */
(function () {
    "use strict";
    var SHOW_SLOTS = true;
    if (!SHOW_SLOTS) {
        document.querySelectorAll("img").forEach(function (i) { i.addEventListener("error", function () { i.remove(); }); });
        return;
    }
    function blank(path, w, h, label) {
        var fs = Math.max(22, Math.min(46, Math.floor(w * 0.92 / (path.length * 0.58))));
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
            '<rect width="100%" height="100%" fill="#ffffff"/>' +
            '<rect x="10" y="10" width="' + (w - 20) + '" height="' + (h - 20) + '" rx="22" fill="none" stroke="#c4c9d1" stroke-width="3" stroke-dasharray="14 10"/>' +
            '<text x="50%" y="' + (h / 2 - 50) + '" text-anchor="middle" font-family="Arial,sans-serif" font-size="52" font-weight="700" fill="#6b7280">' + label + '</text>' +
            '<text x="50%" y="' + (h / 2 + 20) + '" text-anchor="middle" font-family="Arial,sans-serif" font-size="' + fs + '" fill="#111827">' + path.replace(/&/g, "&amp;") + '</text>' +
            '<text x="50%" y="' + (h / 2 + 76) + '" text-anchor="middle" font-family="Arial,sans-serif" font-size="34" fill="#6b7280">' + w + ' x ' + h + ' px recommended</text></svg>';
        return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    }
    function mark(img) {
        if (img.getAttribute("data-slot")) return;
        var raw = img.getAttribute("src") || "";
        if (!raw || raw.indexOf("data:") === 0) return;
        var path = raw.split("?")[0];
        img.setAttribute("data-slot", path);
        img.classList.add("slotEmpty");
        img.removeAttribute("srcset");
        var big = img.classList.contains("tsPlaceImg") || !!img.closest(".tsVeh");
        img.src = blank(path, 1200, 750, "ADD IMAGE HERE");
        var veh = img.closest(".tsVeh");
        if (veh) veh.classList.add("hasImg");
    }
    function scan() {
        document.querySelectorAll("img").forEach(function (img) {
            if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) mark(img);
        });
    }
    document.addEventListener("error", function (e) {
        if (e.target && e.target.tagName === "IMG") mark(e.target);
    }, true);
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", scan); else scan();
    window.addEventListener("load", scan);

    /* hero video + hero image badge */
    document.querySelectorAll(".tsHero").forEach(function (hero) {
        var v = hero.querySelector(".tsHeroVideo");
        if (!v) return;
        var src = v.querySelector("source");
        var vidPath = src ? src.getAttribute("src") : "";
        var imgPath = v.getAttribute("poster") || "";
        var missing = [];
        function done() {
            if (!missing.length) return;
            var b = document.createElement("div");
            b.className = "slotBadge";
            b.innerHTML = "<strong>ADD HERO MEDIA</strong>" + missing.map(function (m) { return "<span>" + m + "</span>"; }).join("");
            hero.insertAdjacentElement("afterend", b);
        }
        var pending = 0;
        function check(p, label) {
            if (!p) return;
            pending++;
            fetch(p, { method: "HEAD" }).then(function (r) {
                var type = r.headers.get("content-type") || "";
                if (!r.ok || type.indexOf("text/html") === 0) missing.push(label + ": " + p);
            }).catch(function () { missing.push(label + ": " + p); }).then(function () { if (--pending === 0) done(); });
        }
        check(vidPath, "Video");
        check(imgPath, "Image");
    });
})();
