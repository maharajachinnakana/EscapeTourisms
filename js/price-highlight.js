/* Wraps every rupee amount inside <main> with a burgundy highlight (.priceHl). */
(function () {
    "use strict";
    var root = document.querySelector("main");
    if (!root) return;
    var re = /(₹\s?\d[\d,]*(?:\.\d+)?(?:\s?[–-]\s?₹?\d[\d,]*)?)/g;
    var skip = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, SELECT: 1, OPTION: 1, BUTTON: 1, NOSCRIPT: 1 };
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
            if (!n.nodeValue || n.nodeValue.indexOf("₹") < 0) return NodeFilter.FILTER_REJECT;
            var p = n.parentNode;
            if (!p || skip[p.nodeName] || (p.closest && p.closest(".tbPrice,.priceHl,.bookingSection,.tsTable caption,.tbHint"))) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    var nodes = [], n;
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(function (t) {
        var parts = t.nodeValue.split(re);
        if (parts.length < 2) return;
        var f = document.createDocumentFragment();
        parts.forEach(function (s, i) {
            if (i % 2) { var sp = document.createElement("span"); sp.className = "priceHl"; sp.textContent = s; f.appendChild(sp); }
            else if (s) f.appendChild(document.createTextNode(s));
        });
        t.parentNode.replaceChild(f, t);
    });
})();
