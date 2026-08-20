/* ==========================================================
   POPULAR ROUTES & FARES — TAB SWITCHER
========================================================== */

(function () {

    var tabs = document.querySelectorAll(".routesTab");
    var panels = document.querySelectorAll(".routesPanel");

    if (!tabs.length) return;

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            var target = tab.getAttribute("data-tab");

            tabs.forEach(function (t) {
                t.classList.toggle("active", t === tab);
                t.setAttribute("aria-selected", t === tab ? "true" : "false");
            });

            panels.forEach(function (panel) {
                var match = panel.id === "panel-" + target;
                panel.classList.toggle("active", match);
                panel.hidden = !match;
            });

        });

    });

})();
