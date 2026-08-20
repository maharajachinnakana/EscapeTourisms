/* ==========================================================
   ESCAPE TOURISMS — FOOTER
   Mobile accordion for footer link columns + live year.
========================================================== */

(function () {

    var yearEl = document.getElementById("footerYear");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    var toggles = document.querySelectorAll(".footerColToggle");

    toggles.forEach(function (btn) {

        btn.addEventListener("click", function () {

            if (window.innerWidth > 560) return;

            var col = btn.closest(".footerCol");
            var isOpen = col.classList.contains("isOpen");

            document.querySelectorAll(".footerCol.isOpen").forEach(function (openCol) {
                if (openCol !== col) {
                    openCol.classList.remove("isOpen");
                    var t = openCol.querySelector(".footerColToggle");
                    if (t) t.setAttribute("aria-expanded", "false");
                }
            });

            col.classList.toggle("isOpen", !isOpen);
            btn.setAttribute("aria-expanded", String(!isOpen));

        });

    });

})();
