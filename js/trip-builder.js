/* ==========================================================
   TRIP BUILDER — shared behaviour
   Each .tbRoute carries: data-route, data-detail, data-prices (JSON {vehicle: price})
   Opens a panel to add/remove sightseeing points and sends the
   customised trip to WhatsApp (same wa.me pattern as the rest of the site).
========================================================== */
(function () {
    "use strict";
    var WA = "919497665450";
    function fmt(n) { return "₹" + Number(n).toLocaleString("en-IN"); }
    function wa(text) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(text); }

    document.querySelectorAll(".tbRoute").forEach(function (box) {
        var route = box.getAttribute("data-route");
        var kind = box.getAttribute("data-kind") || "sightseeing";
        var prices = {};
        try { prices = JSON.parse(box.getAttribute("data-prices") || "{}"); } catch (e) {}
        var vehSel = box.querySelector(".tbVehicle");
        var lblEl = box.querySelector(".tbPriceLbl");
        var priceEl = box.querySelector(".tbPriceVal");
        var altEl = box.querySelector(".tbPriceAlt");
        var bookBtn = box.querySelector(".tbBook");
        var toggle = box.querySelector(".tbToggle");
        var panel = box.querySelector(".tbPanel");
        var send = box.querySelector(".tbSend");
        var count = box.querySelector(".tbCount");
        var boxes = box.querySelectorAll(".tbChip input");
        var people = box.querySelector(".tbPeople");
        var date = box.querySelector(".tbDate");
        var pickup = box.querySelector(".tbPickup");
        var other = box.querySelector(".tbOther");
        var names = Object.keys(prices);

        function vehicle() { return vehSel ? vehSel.value : names[0]; }
        function price() { return prices[vehicle()]; }

        function refresh() {
            var v = vehicle(), p = price();
            if (priceEl && p) priceEl.textContent = fmt(p);
            if (lblEl) lblEl.textContent = v + " from";
            if (altEl) {
                var alt = names.filter(function (n) { return n !== v; })[0];
                altEl.textContent = alt && prices[alt] ? alt + " " + fmt(prices[alt]) : "";
            }
            if (bookBtn) {
                bookBtn.href = wa("Hello Escape Tourisms, I would like to book: " + v + " " + route +
                    " sightseeing taxi" + (p ? " (starting " + fmt(p) + " per vehicle)" : "") + ".");
            }
            var sel = [];
            boxes.forEach(function (b) { if (b.checked) sel.push(b.value); });
            if (count) count.textContent = sel.length + (sel.length === 1 ? " stop selected" : " stops selected");
            if (send) {
                var lines = [
                    "Hello Escape Tourisms, I would like a customised sightseeing trip.",
                    "Route: " + route,
                    "Vehicle: " + v + (p ? " (starting " + fmt(p) + " per vehicle)" : ""),
                    people && people.value ? "Travellers: " + people.value : "",
                    date && date.value ? "Date: " + date.value : "",
                    pickup && pickup.value.trim() ? "Pickup: " + pickup.value.trim() : "",
                    "Selected stops (" + sel.length + "):"
                ].filter(Boolean);
                sel.forEach(function (s, i) { lines.push((i + 1) + ". " + s); });
                if (other && other.value.trim()) lines.push("Also add: " + other.value.trim());
                lines.push("Please confirm the final fare and timing.");
                send.href = wa(lines.join("\n"));
            }
        }

        if (toggle && panel) {
            toggle.addEventListener("click", function () {
                var open = toggle.getAttribute("aria-expanded") === "true";
                toggle.setAttribute("aria-expanded", open ? "false" : "true");
                panel.hidden = open;
                var lbl = toggle.querySelector("span");
                if (lbl) lbl.textContent = open ? "Customise trip" : "Close customiser";
            });
        }
        box.querySelectorAll("input, select").forEach(function (el) {
            el.addEventListener("input", refresh);
            el.addEventListener("change", refresh);
        });
        var reset = box.querySelector(".tbReset");
        if (reset) reset.addEventListener("click", function () {
            boxes.forEach(function (b) { b.checked = b.defaultChecked; }); refresh();
        });
        var clear = box.querySelector(".tbClear");
        if (clear) clear.addEventListener("click", function () {
            boxes.forEach(function (b) { b.checked = false; }); refresh();
        });
        refresh();
    });
})();
