/* ==========================================================
   SLOT PREVIEW — shows a white placeholder wherever an image
   or video file is still missing, with the exact file path to add.
   >>> BEFORE FINAL LAUNCH set SHOW_SLOTS = false  (or delete the
   <script src="/js/slot-preview.js"> line). Add ?slots=0 / ?slots=1
   to any URL to switch it off / on for one visit.
========================================================== */
(function () {
    "use strict";
    var SHOW_SLOTS = true;
    var q = location.search;
    if (/[?&]slots=0/.test(q)) SHOW_SLOTS = false;
    if (/[?&]slots=1/.test(q)) SHOW_SLOTS = true;
    if (!SHOW_SLOTS) return;

    var css = document.createElement("style");
    css.textContent =
        ".slotBox{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;box-sizing:border-box;width:100%;min-height:150px;margin:0 0 12px;padding:12px;background:#fff;color:#333;border:2px dashed #9aa3a0;border-radius:14px;font:600 12px/1.35 ui-monospace,Menlo,Consolas,monospace;text-align:center;word-break:break-all}" +
        ".slotBox b{color:#9C8250;font-size:11px;letter-spacing:.08em}" +
        ".slotTag{position:absolute;z-index:60;right:10px;bottom:10px;max-width:calc(100% - 20px);padding:6px 10px;background:#fff;color:#222;border:1.5px dashed #888;border-radius:8px;font:600 11px/1.3 ui-monospace,Menlo,Consolas,monospace;word-break:break-all;pointer-events:none}";
    document.head.appendChild(css);

    function path(u) { try { return new URL(u, location.href).pathname; } catch (e) { return u; } }

    function tag(parent, kind, file) {
        if (getComputedStyle(parent).position === "static") parent.style.position = "relative";
        var t = document.createElement("div");
        t.className = "slotTag";
        t.textContent = kind + " → " + file;
        parent.appendChild(t);
    }

    document.addEventListener("error", function (e) {
        var t = e.target;
        if (!t || !t.tagName) return;
        if (t.tagName === "IMG") {
            e.stopPropagation();
            if (t.getAttribute("data-slot")) return;
            t.setAttribute("data-slot", "1");
            var file = path(t.currentSrc || t.src);
            var cs = getComputedStyle(t);
            t.style.display = "none";
            if (cs.position === "absolute" || cs.position === "fixed") { tag(t.parentNode, "IMAGE", file); return; }
            var w = parseInt(t.getAttribute("width") || "0", 10), h = parseInt(t.getAttribute("height") || "0", 10);
            var b = document.createElement("div");
            b.className = "slotBox";
            if (w && h && w <= 120) { b.style.width = w + "px"; b.style.minHeight = h + "px"; b.style.padding = "2px"; b.style.fontSize = "8px"; b.title = file; b.textContent = "IMG"; }
            else b.innerHTML = "<b>IMAGE</b><span></span>";
            if (b.querySelector("span")) b.querySelector("span").textContent = file;
            t.parentNode.insertBefore(b, t);
        } else if (t.tagName === "SOURCE" && t.parentNode && t.parentNode.tagName === "VIDEO") {
            e.stopPropagation();
            var v = t.parentNode;
            if (v.getAttribute("data-slot")) return;
            v.setAttribute("data-slot", "1");
            tag(v.parentNode, "VIDEO", path(t.src) + (v.getAttribute("poster") ? "  |  poster: " + path(v.getAttribute("poster")) : ""));
        }
    }, true);
})();
