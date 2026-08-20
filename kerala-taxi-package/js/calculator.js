/* ==========================================================
   EXTRA KM CALCULATOR
   dayRate + max(0, km - 100) * 18
========================================================== */

(function () {

    var vehicleSelect = document.getElementById("calcVehicle");
    var kmInput = document.getElementById("calcKm");
    var totalEl = document.getElementById("calcTotal");

    if (!vehicleSelect || !kmInput || !totalEl) return;

    var EXTRA_KM_RATE = 18;
    var INCLUDED_KM = 100;

    function formatINR(num) {
        return "₹" + num.toLocaleString("en-IN");
    }

    function calculate() {

        var dayRate = parseInt(vehicleSelect.value, 10) || 0;
        var km = parseInt(kmInput.value, 10) || 0;

        var extraKm = Math.max(0, km - INCLUDED_KM);
        var total = dayRate + (extraKm * EXTRA_KM_RATE);

        totalEl.textContent = formatINR(total);
    }

    vehicleSelect.addEventListener("change", calculate);
    kmInput.addEventListener("input", calculate);

    calculate();

})();
