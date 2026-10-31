/* Menu tree: main item stays a normal link; the arrow on its right
   opens/closes its sub pages. The group for the current page opens automatically. */
(function () {
    "use strict";
    var here = location.pathname.replace(/index\.html$/, "");
    if (here.slice(-1) !== "/") here += "/";

    document.querySelectorAll(".menuGroup").forEach(function (g) {
        var btn = g.querySelector(".menuArrow");
        var sub = g.querySelector(".menuSub");
        if (!btn || !sub) return;
        function set(open) {
            g.classList.toggle("open", open);
            btn.setAttribute("aria-expanded", open ? "true" : "false");
        }
        btn.addEventListener("click", function (e) {
            e.preventDefault(); e.stopPropagation();
            var open = !g.classList.contains("open");
            var scope = g.parentNode;
            scope.querySelectorAll(".menuGroup.open").forEach(function (o) {
                if (o !== g) { o.classList.remove("open"); var b = o.querySelector(".menuArrow"); if (b) b.setAttribute("aria-expanded", "false"); }
            });
            set(open);
        });
        if (g.querySelector('a[data-menu-url="' + here + '"]')) set(true);
    });
    document.querySelectorAll("[data-menu-url]").forEach(function (a) {
        if (a.getAttribute("data-menu-url") === here) a.classList.add("isCurrent");
    });
})();
